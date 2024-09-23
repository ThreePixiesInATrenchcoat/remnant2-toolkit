'use server';

import { prisma } from '@repo/db';
import { urlNoCache } from '@repo/utils';
import { revalidatePath } from 'next/cache';

import { badWordFilter } from '@/app/_libs/bad-word-filter';
import { sendWebhook } from '@/app/_libs/moderation/send-webhook';
import { verifyBuildState } from '@/app/_libs/moderation/verify-build-state';
import { verifyCreatorInfo } from '@/app/_libs/moderation/verify-creator-info';
import { BUILD_REVALIDATE_PATHS } from '@/app/(builds)/_constants/build-revalidate-paths';
import { DEFAULT_BUILD_NAME } from '@/app/(builds)/_constants/default-build-name';
import { buildStateToBuildItems } from '@/app/(builds)/_libs/build-state-to-build-items';
import { isPermittedBuilder } from '@/app/(builds)/_libs/is-permitted-builder';
import { type BuildActionResponse } from '@/app/(builds)/_types/build-action-response';
import { type BuildState } from '@/app/(builds)/_types/build-state';
import { getSession } from '@/app/(user)/_auth/services/sessionService';

export async function createBuild({
  buildVariants,
}: {
  buildVariants: BuildState[];
}): Promise<BuildActionResponse> {
  // session validation
  const session = await getSession();
  if (!session || !session.user || !session.user.id) {
    return {
      message: 'You must be logged in.',
    };
  }

  const mainBuildState = buildVariants[0];
  if (!mainBuildState) {
    return {
      errors: ['Error creating build - main build state not found.'],
    };
  }

  try {
    for await (const variant of buildVariants) {
      const verifyBuildStateResponse = verifyBuildState({
        buildState: mainBuildState,
        userDisplayName: session.user?.name as string,
        userId: session.user?.id as string,
      });
      if (verifyBuildStateResponse.webhook) {
        await sendWebhook(verifyBuildStateResponse.webhook);
        return {
          errors: [
            `Error creating build - bad language detected. Build: ${variant.name}`,
          ],
        };
      }
    }

    await verifyCreatorInfo(session);

    // Add each build and variant to the Build table
    const createBuildsResponse = await Promise.all(
      buildVariants.map((variant) => {
        return prisma.build.create({
          data: {
            name:
              variant.name && variant.name !== ''
                ? badWordFilter.clean(variant.name)
                : DEFAULT_BUILD_NAME,
            description:
              variant.description && variant.description !== ''
                ? badWordFilter.clean(variant.description)
                : '',
            isPublic: Boolean(variant.isPublic),
            isPatchAffected: Boolean(variant.isPatchAffected),
            isModeratorApproved: false,
            videoUrl: variant.videoUrl,
            buildLink: variant.buildLink,
            buildLinkUpdatedAt: variant.buildLinkUpdatedAt,
            createdBy: {
              connect: {
                id: session.user?.id,
              },
            },
            BuildItems: {
              create: buildStateToBuildItems(variant).filter(
                (variant) => variant !== undefined,
              ),
            },
            BuildTags: variant.buildTags
              ? {
                  create: variant.buildTags.map((tag) => {
                    return {
                      tag: tag.tag,
                    };
                  }),
                }
              : undefined,
          },
        });
      }),
    );

    const mainBuildResponse = createBuildsResponse[0];
    const variantBuildResponses = createBuildsResponse.slice(1);

    if (!mainBuildResponse || !mainBuildResponse.id) {
      console.error(
        'Error creating build - main build not created successfully.',
      );
      return {
        errors: ['Error creating build - main build not created successfully.'],
      };
    }

    // Register a vote for the build
    await prisma.buildVoteCounts.create({
      data: {
        buildId: mainBuildResponse.id,
        userId: session.user.id,
      },
    });

    // Add the newly created builds to the BuildVariant table
    const _createBuildVariantsResponse = await prisma.buildVariant.createMany({
      data: variantBuildResponses.map((build, index) => {
        return {
          primaryBuildId: mainBuildResponse?.id as string,
          secondaryBuildId: build.id,
          index: index + 1,
        };
      }),
    });

    const shouldSendWebhook =
      mainBuildState.isPublic && process.env.WEBHOOK_DISABLED !== 'true';
    if (shouldSendWebhook) {
      const newBuildParams = {
        content: `New build created! ${urlNoCache(
          `https://remnant2toolkit.com/builder/${mainBuildResponse.id}`,
        )}`,
      };
      const newBuildWebhookResponse = await fetch(
        `${process.env.WEBHOOK_MOD_QUEUE}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBuildParams),
        },
      );
      if (!newBuildWebhookResponse.ok) {
        console.error('Error in sending build moderation webhook to Discord!');
      }

      // send the new build to the new-build-feed
      const newBuildFeedResponse = await fetch(
        `${process.env.WEBHOOK_NEW_BUILD_FEED}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBuildParams),
        },
      );

      if (!newBuildFeedResponse.ok) {
        console.error('Error in sending new build webhook to Discord!');
      }

      // if the build has a reference link, send it
      const shouldSendReferenceLink = !isPermittedBuilder(session.user.id);
      if (shouldSendReferenceLink) {
        let index = 0;
        for await (const response of createBuildsResponse) {
          if (response.buildLink) {
            const params = {
              embeds: [
                {
                  title: `New Build Reference Link`,
                  color: 0x00ff00,
                  fields: [
                    {
                      name: 'Build Link',
                      value: `https://remnant2toolkit.com/builder/${
                        response.id
                      }?t=${Date.now()}${index > 0 ? `&variant=${index}` : ''}`,
                    },
                    {
                      name: 'Reference Link',
                      value: `${response.buildLink}`,
                    },
                  ],
                },
              ],
            };
            const res = await fetch(`${process.env.WEBHOOK_MOD_QUEUE}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(params),
            });
            if (!res.ok) {
              console.error('Error in sending build link webhook to Discord!');
            }
            index++;
          }
        }
      }
    }

    // Refresh the cache for the route
    for (const path of BUILD_REVALIDATE_PATHS) {
      revalidatePath(path, 'page');
    }

    return {
      message: 'Build successfully saved!',
      buildId: createBuildsResponse[0]?.id,
    };
  } catch (error) {
    console.error('Error updating build:', error);
    return {
      errors: ['Error updating build - database error occurred.'],
    };
  }
}
