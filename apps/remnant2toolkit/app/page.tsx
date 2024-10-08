import { BaseLink, getImageUrl, LeaderBoard } from '@repo/ui';
import Image from 'next/image';

import { getFavoritesLeaderboard } from '@/app/_components/get-favorites-leaderboard';
import { LandingPageCard } from '@/app/_components/landing-page-card';
import { LandingPageCardDisabled } from '@/app/_components/landing-page-card-disabled';
import { LandingPageContainer } from '@/app/_components/landing-page-container';
import { NAV_ITEMS } from '@/app/_types/navigation';
import { getQualityBuildFeed } from '@/app/(builds)/_actions/get-quality-build-feed';
import { getTotalBuildCount } from '@/app/(builds)/_actions/get-total-build-count';
import { QualityBuildsFeed } from '@/app/(builds)/_components/quality-builds-feed';
import { getLeaderBoard as getItemQuizLeaderBoard } from '@/app/(items)/item-quiz/_actions/get-leader-board';
import { getSession } from '@/app/(user)/_auth/services/sessionService';

export default async function Page() {
  const session = await getSession();

  const [totalBuildCount, qualityBuilds] = await Promise.all([
    getTotalBuildCount(),
    getQualityBuildFeed(),
  ]);

  return (
    <div className="grid w-full grid-cols-4 gap-x-4">
      <div className="col-span-full w-full xl:col-span-3">
        <LandingPageContainer
          description={
            <>
              <p className="text-lg leading-8 text-gray-300">
                <BaseLink
                  href={NAV_ITEMS.communityBuilds.href}
                  className="hover:text-primary-500 underline"
                >
                  Search the community&apos;s{' '}
                  <span className="text-primary-500 text-2xl font-bold">
                    {totalBuildCount}
                  </span>{' '}
                  submitted builds
                </BaseLink>
                ,{' '}
                <BaseLink
                  href={session?.user?.id ? '/builder/create' : '/builder'}
                  className="hover:text-primary-500 underline"
                >
                  create your own builds
                </BaseLink>
                ,{' '}
                <BaseLink
                  href={NAV_ITEMS.itemTracker.href}
                  className="hover:text-primary-500 underline"
                >
                  track your collectibles
                </BaseLink>
                , and more!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                <span className="text-primary-500 font-bold">100% free</span>{' '}
                and{' '}
                <span className="text-primary-500 font-bold">open source</span>{' '}
                toolkit for Remnant 2. No ads, no tracking, no BS.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                <span className="text-primary-500 font-bold">
                  No login required
                </span>{' '}
                to start creating builds, searching community builds, tracking
                your collectibles, or searching for detailed item information.
              </p>
            </>
          }
        >
          <div className="mt-8 hidden sm:col-span-1 sm:mt-0 md:block">
            <LandingPageCard
              {...NAV_ITEMS.featuredBuilds}
              icon={
                <NAV_ITEMS.featuredBuilds.icon
                  className="text-primary-500 h-7 w-7 flex-none"
                  aria-hidden="true"
                />
              }
            />
            <LandingPageCard
              {...NAV_ITEMS.itemLookup}
              icon={
                <NAV_ITEMS.itemLookup.icon
                  className="text-primary-500 h-7 w-7 flex-none"
                  aria-hidden="true"
                />
              }
            />
          </div>
          <div className="col-span-full mt-8 hidden w-full md:block">
            <QualityBuildsFeed builds={qualityBuilds.builds} />
          </div>
          <div className="col-span-full mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            <div className="md:hidden">
              <LandingPageCard
                {...NAV_ITEMS.featuredBuilds}
                icon={
                  <NAV_ITEMS.featuredBuilds.icon
                    className="text-primary-500 h-7 w-7 flex-none"
                    aria-hidden="true"
                  />
                }
              />
            </div>
            <LandingPageCard
              {...NAV_ITEMS.communityBuilds}
              icon={
                <NAV_ITEMS.communityBuilds.icon
                  className="text-primary-500 h-7 w-7 flex-none"
                  aria-hidden="true"
                />
              }
            />
            <div className="col-span-full md:hidden">
              <QualityBuildsFeed builds={qualityBuilds.builds} />
            </div>
            <div className="md:hidden">
              <LandingPageCard
                {...NAV_ITEMS.itemLookup}
                icon={
                  <NAV_ITEMS.itemLookup.icon
                    className="text-primary-500 h-7 w-7 flex-none"
                    aria-hidden="true"
                  />
                }
              />
            </div>
            <LandingPageCard
              {...NAV_ITEMS.itemTracker}
              icon={
                <NAV_ITEMS.itemTracker.icon
                  className="text-primary-500 h-7 w-7 flex-none"
                  aria-hidden="true"
                />
              }
            />

            <LandingPageCard
              {...NAV_ITEMS.createBuild}
              icon={
                <NAV_ITEMS.createBuild.icon
                  className="text-primary-500 h-7 w-7 flex-none"
                  aria-hidden="true"
                />
              }
            />

            {session?.user?.id ? (
              <LandingPageCard
                {...NAV_ITEMS.loadouts}
                href={`/profile/${session?.user?.id}/loadouts?t=${Date.now()}`}
                icon={
                  <NAV_ITEMS.loadouts.icon
                    className="text-primary-500 h-7 w-7 flex-none"
                    aria-hidden="true"
                  />
                }
              />
            ) : (
              <LandingPageCardDisabled
                {...NAV_ITEMS.loadouts}
                disabledReason="An account is required to use the Loadouts feature."
                icon={
                  <NAV_ITEMS.loadouts.icon
                    className="text-primary-500 h-7 w-7 flex-none"
                    aria-hidden="true"
                  />
                }
              />
            )}

            <LandingPageCard
              {...NAV_ITEMS.worldSaveArchive}
              icon={
                <NAV_ITEMS.worldSaveArchive.icon
                  className="text-primary-500 h-7 w-7 flex-none"
                  aria-hidden="true"
                />
              }
            />

            <LandingPageCard
              {...NAV_ITEMS.bossTracker}
              icon={
                <NAV_ITEMS.bossTracker.icon
                  className="text-primary-500 h-7 w-7 flex-none"
                  aria-hidden="true"
                />
              }
            />

            <LandingPageCard
              {...NAV_ITEMS.wiki}
              icon={
                <NAV_ITEMS.wiki.icon
                  className="text-primary-500 h-7 w-7 flex-none"
                  aria-hidden="true"
                />
              }
            />

            <LandingPageCard
              {...NAV_ITEMS.vashCalculator}
              icon={
                <NAV_ITEMS.vashCalculator.icon
                  className="text-primary-500 h-7 w-7 flex-none"
                  aria-hidden="true"
                />
              }
            />

            <LandingPageCard
              {...NAV_ITEMS.supportR2TK}
              icon={
                <NAV_ITEMS.supportR2TK.icon
                  className="text-primary-500 h-7 w-7 flex-none"
                  aria-hidden="true"
                />
              }
            />

            <LandingPageCard
              {...NAV_ITEMS.itemQuiz}
              icon={
                <NAV_ITEMS.itemQuiz.icon
                  className="text-primary-500 h-7 w-7 flex-none"
                  aria-hidden="true"
                />
              }
            />

            <LandingPageCard
              {...NAV_ITEMS.discordInvite}
              target="_blank"
              icon={null}
            />
          </div>
        </LandingPageContainer>
      </div>
      <div className="col-span-full mt-8 grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10 xl:col-span-1 xl:mt-0 xl:flex xl:flex-col xl:items-center xl:justify-start xl:gap-x-0 xl:gap-y-10">
        <div className="xl:order-2">
          <LeaderBoard
            fetchAction={getFavoritesLeaderboard}
            headerLink="/community-builds"
            itemCount={10}
            title="Top Favorite Counts"
          />
        </div>
        <div className="xl:order-3">
          <LeaderBoard
            fetchAction={getItemQuizLeaderBoard}
            headerLink="/item-quiz"
            itemCount={10}
            title="Top Item Quiz Scores"
          />
        </div>
        <div className="col-span-full flex w-full flex-col items-center justify-start md:col-span-1">
          <h3 className="text-primary-500 mb-4 text-xl font-bold">
            Latest Post
          </h3>
          <BaseLink
            href="https://www.patreon.com/posts/preparing-for-on-111885482"
            target="_blank"
          >
            <Image
              src={getImageUrl('/patreon-posts/2024-09-11.jpg')}
              width={253}
              height={450}
              alt="Cooking a bit while waiting for the next DLC"
            />
          </BaseLink>
        </div>
      </div>
    </div>
  );
}
