'use client';

import {
  BaseDivider,
  BaseField,
  BaseLabel,
  BaseListbox,
  BaseListboxLabel,
  BaseListboxOption,
  cn,
} from '@repo/ui';
import { urlNoCache } from '@repo/utils';
import copy from 'clipboard-copy';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { DescriptionWithTokens } from '@/app/_components/description-with-tokens';
import { ToCsvButton } from '@/app/_components/to-csv-button';
import { LoadoutDialog } from '@/app/(builds)/_components/loadout-dialog';
import { useBuildActions } from '@/app/(builds)/_hooks/use-build-actions';
import { buildStateToCsvData } from '@/app/(builds)/_utils/build-state-to-csv-data';
import { cleanUpBuildState } from '@/app/(builds)/_utils/clean-up-build-state';
import { dbBuildToBuildState } from '@/app/(builds)/_utils/db-build-to-build-state';
import { BuilderContainer } from '@/app/(builds)/builder/_components/builder-container';
import { DeleteBuildButton } from '@/app/(builds)/builder/_components/buttons/delete-build-button';
import { DetailedViewButton } from '@/app/(builds)/builder/_components/buttons/detailed-view-button';
import { DuplicateBuildButton } from '@/app/(builds)/builder/_components/buttons/duplicate-build-button';
import { EditBuildButton } from '@/app/(builds)/builder/_components/buttons/edit-build-button';
import { EditLinkedBuildButton } from '@/app/(builds)/builder/_components/buttons/edit-linked-build-button';
import { FavoriteBuildButton } from '@/app/(builds)/builder/_components/buttons/favorite-build-button';
import { GenerateBuildImageButton } from '@/app/(builds)/builder/_components/buttons/generate-build-image';
import { LoadoutManagementButton } from '@/app/(builds)/builder/_components/buttons/loadout-management-button';
import { ModeratorToolsButton } from '@/app/(builds)/builder/_components/buttons/moderator-tools-button';
import { ShareBuildButton } from '@/app/(builds)/builder/_components/buttons/share-build-button';
import { DetailedBuildDialog } from '@/app/(builds)/builder/_components/dialogs/detailed-build-dialog';
import { FavoriteBuildDialog } from '@/app/(builds)/builder/_components/dialogs/favorite-build-dialog';
import { ImageDownloadInfoDialog } from '@/app/(builds)/builder/_components/dialogs/image-download-info-dialog';
import { VideoThumbnail } from '@/app/(builds)/builder/_components/video-thumbnail';
import { ModeratorLinkedBuildToolsDialog } from '@/app/(builds)/builder/linked/_admin/components/dialogs/moderator-linkedbuild-tools-dialog';
import {
  type LinkedBuildItem,
  type LinkedBuildState,
} from '@/app/(builds)/builder/linked/_types/linked-builds';

interface Props {
  linkedBuildState: LinkedBuildState;
}

export function PageClient({ linkedBuildState }: Props) {
  const { linkedBuildItems } = linkedBuildState;
  const [currentLinkedBuild, setCurrentLinkedBuild] = useState<LinkedBuildItem>(
    linkedBuildItems[0] as LinkedBuildItem,
  );

  const buildState = cleanUpBuildState(
    dbBuildToBuildState(currentLinkedBuild.build),
  );

  const [showModeratorTooling, setShowModeratorTooling] = useState(false);

  const [detailedBuildDialogOpen, setDetailedBuildDialogOpen] = useState(false);
  const [loadoutDialogOpen, setLoadoutDialogOpen] = useState(false);

  const router = useRouter();
  const { data: session } = useSession();

  const [signInRequiredDialogOpen, setSignInRequiredDialogOpen] =
    useState(false);

  const {
    isScreenshotMode,
    showControls,
    imageDownloadInfo,
    imageExportLoading,
    handleClearImageDownloadInfo,
    handleDuplicateBuild,
    handleFavoriteBuild,
    handleImageExport,
  } = useBuildActions();

  const buildContainerRef = useRef<HTMLDivElement>(null);

  // Need to convert the build data to a format that the BuildPage component can use
  if (!session?.user) {
    buildState.upvoted = false;
    buildState.reported = false;
  }

  // We need to convert the build.items object into an array of items to pass to the ToCsvButton
  const csvBuildData = buildStateToCsvData(buildState);

  return (
    <div className="flex w-full flex-col items-center">
      <DetailedBuildDialog
        buildState={buildState}
        open={detailedBuildDialogOpen}
        onClose={() => setDetailedBuildDialogOpen(false)}
      />
      <LoadoutDialog
        key={loadoutDialogOpen.toString()}
        buildId={buildState.buildId}
        open={loadoutDialogOpen}
        onClose={() => setLoadoutDialogOpen(false)}
        isEditable={true}
      />
      <ImageDownloadInfoDialog
        onClose={handleClearImageDownloadInfo}
        imageDownloadInfo={imageDownloadInfo}
      />
      <FavoriteBuildDialog
        open={signInRequiredDialogOpen}
        onClose={() => setSignInRequiredDialogOpen(false)}
      />
      <div className="height-full flex w-full flex-col items-center justify-center">
        <div className="mb-8 w-full max-w-lg">
          <h2 className="border-b-primary-500 mb-2 border-b pb-2 text-center text-2xl font-bold">
            {linkedBuildState.name}
          </h2>
          <div className="mb-2 flex flex-col">
            {linkedBuildState.description &&
              linkedBuildState.description.length > 0 && (
                <div
                  className={cn(
                    'text-md overflow-x-auto overflow-y-auto whitespace-pre-wrap text-gray-200',
                    isScreenshotMode && 'max-h-none',
                  )}
                >
                  <DescriptionWithTokens
                    description={linkedBuildState.description}
                    highlightBuildTokens={true}
                    highlightExternalTokens={false}
                    highlightItems={true}
                  />
                </div>
              )}
          </div>

          <BaseDivider className="my-4 sm:my-0 sm:hidden" />

          <BaseField className="sm:hidden">
            <BaseLabel>
              <div className="mb-2 w-full text-center">Linked Builds</div>
            </BaseLabel>
            <BaseListbox
              name="linkedBuilds"
              value={currentLinkedBuild.label}
              onChange={(value) => {
                const linkedBuild = linkedBuildItems.find(
                  (linkedBuildItem) => linkedBuildItem.label === value,
                );
                if (linkedBuild) {
                  setCurrentLinkedBuild(linkedBuild);
                }
              }}
            >
              {linkedBuildItems.map((linkedBuildItem) => (
                <BaseListboxOption
                  key={linkedBuildItem.id}
                  value={linkedBuildItem.label}
                >
                  <BaseListboxLabel>{linkedBuildItem.label}</BaseListboxLabel>
                </BaseListboxOption>
              ))}
            </BaseListbox>
          </BaseField>
          <div className="hidden sm:block">
            <nav
              className="isolate flex divide-x divide-gray-700 rounded-lg shadow"
              aria-label="Tabs"
            >
              {linkedBuildItems.map((linkedBuildItem, tabIdx) => (
                <button
                  key={linkedBuildItem.build.id}
                  onClick={() => setCurrentLinkedBuild(linkedBuildItem)}
                  className={cn(
                    linkedBuildItem.build.id === currentLinkedBuild.build.id
                      ? 'text-gray-300'
                      : 'text-gray-400 hover:text-gray-300',
                    tabIdx === 0 ? 'rounded-l-lg' : '',
                    tabIdx === linkedBuildItems.length - 1
                      ? 'rounded-r-lg'
                      : '',
                    'group relative min-w-0 flex-1 overflow-hidden bg-gray-900 px-4 py-4 text-center text-sm font-medium hover:bg-gray-800 focus:z-10',
                  )}
                >
                  <span>{linkedBuildItem.label}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      linkedBuildItem.build.id === currentLinkedBuild.build.id
                        ? 'bg-purple-500'
                        : 'bg-transparent',
                      'absolute inset-x-0 bottom-0 h-0.5',
                    )}
                  />
                </button>
              ))}
            </nav>
          </div>
        </div>
        <VideoThumbnail buildState={buildState} />
        <BuilderContainer
          buildContainerRef={buildContainerRef}
          buildState={buildState}
          isEditable={false}
          isScreenshotMode={isScreenshotMode}
          itemOwnershipPreference={false}
          showControls={showControls}
          builderActions={
            <>
              {session &&
                session.user?.id !== buildState.createdById &&
                session.user?.role === 'admin' && (
                  <>
                    <ModeratorLinkedBuildToolsDialog
                      open={showModeratorTooling}
                      onClose={() => setShowModeratorTooling(false)}
                      buildToModerate={linkedBuildState}
                    />
                    <ModeratorToolsButton
                      onClick={() => setShowModeratorTooling(true)}
                    />
                  </>
                )}
              {session && session.user?.id === buildState.createdById && (
                <EditBuildButton
                  onClick={() =>
                    router.push(`/builder/edit/${buildState.buildId}`)
                  }
                />
              )}

              {session && session.user?.id === buildState.createdById && (
                <EditLinkedBuildButton
                  onClick={() =>
                    router.push(`/builder/linked/edit/${linkedBuildState.id}`)
                  }
                />
              )}

              <GenerateBuildImageButton
                imageExportLoading={imageExportLoading}
                onClick={() =>
                  handleImageExport(
                    buildContainerRef.current,
                    `${buildState.name}`,
                  )
                }
              />

              <ShareBuildButton
                onClick={() => {
                  const url = urlNoCache(
                    `https://remnant2toolkit.com/builder/${currentLinkedBuild.build.id}`,
                  );
                  copy(url);
                  toast.success('Copied Build URL to clipboard.');
                }}
              />

              {session?.user?.id && (
                <LoadoutManagementButton
                  buildId={buildState.buildId}
                  onClick={() => setLoadoutDialogOpen(true)}
                />
              )}

              {buildState.createdById !== session?.user?.id && (
                <FavoriteBuildButton
                  upvoted={buildState.upvoted}
                  onClick={() => {
                    // if user is not signed in, let them know signin is required
                    if (!session?.user?.id) {
                      setSignInRequiredDialogOpen(true);
                      return;
                    }
                    handleFavoriteBuild(buildState, session?.user?.id);
                    setCurrentLinkedBuild({
                      ...currentLinkedBuild,
                      build: {
                        ...currentLinkedBuild.build,
                        upvoted: !currentLinkedBuild.build.upvoted,
                        totalUpvotes: currentLinkedBuild.build.upvoted
                          ? currentLinkedBuild.build.totalUpvotes - 1
                          : currentLinkedBuild.build.totalUpvotes + 1,
                      },
                    });
                  }}
                />
              )}

              {session &&
                session.user?.id === buildState.createdById &&
                buildState.buildId && (
                  <DeleteBuildButton buildId={buildState.buildId} />
                )}

              <DetailedViewButton
                onClick={() => setDetailedBuildDialogOpen(true)}
              />

              <DuplicateBuildButton
                onClick={() => handleDuplicateBuild(buildState)}
              />

              <ToCsvButton
                data={csvBuildData.filter((item) => item?.name !== '')}
                filename={`remnant2_builder_${buildState.name}`}
                label="Export to CSV"
              />
            </>
          }
        />
      </div>
    </div>
  );
}
