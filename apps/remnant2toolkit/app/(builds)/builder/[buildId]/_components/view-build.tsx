'use client';

import { urlNoCache } from '@repo/utils';
import copy from 'clipboard-copy';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { startTransition, useOptimistic, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useLocalStorage } from 'usehooks-ts';

import { ToCsvButton } from '@/app/_components/to-csv-button';
import {
  type ItemOwnershipPreference,
  LOCALSTORAGE_KEY,
} from '@/app/_types/localstorage';
import { ModeratorBuildToolsDialog } from '@/app/(builds)/_admin/components/dialogs/moderator-build-tools-dialog';
import { useImageExport } from '@/app/(builds)/_hooks/use-image-export';
import { buildStateToCsvData } from '@/app/(builds)/_libs/build-state-to-csv-data';
import { handleDuplicateBuild } from '@/app/(builds)/_libs/handlers/handle-duplicate-build';
import { handleFavoriteBuild } from '@/app/(builds)/_libs/handlers/handle-favorite-build';
import { setLocalBuildItemOwnership } from '@/app/(builds)/_libs/set-local-build-item-ownership';
import { type BuildState } from '@/app/(builds)/_types/build-state';
import { BuilderContainer } from '@/app/(builds)/builder/_components/builder-container';
import { DeleteBuildButton } from '@/app/(builds)/builder/_components/delete-build-button';
import { DetailedBuildDialog } from '@/app/(builds)/builder/_components/detailed-build-dialog';
import { DetailedViewButton } from '@/app/(builds)/builder/_components/detailed-view-button';
import { DuplicateBuildButton } from '@/app/(builds)/builder/_components/duplicate-build-button';
import { EditBuildButton } from '@/app/(builds)/builder/_components/edit-build-button';
import { FavoriteBuildButton } from '@/app/(builds)/builder/_components/favorite-build-button';
import { FavoriteBuildDialog } from '@/app/(builds)/builder/_components/favorite-build-dialog';
import { GenerateBuildImageButton } from '@/app/(builds)/builder/_components/generate-build-image';
import { ImageDownloadInfoDialog } from '@/app/(builds)/builder/_components/image-download-info-dialog';
import { ItemOwnershipPreferenceButton } from '@/app/(builds)/builder/_components/item-ownership-preference-button';
import { ModeratorToolsButton } from '@/app/(builds)/builder/_components/moderator-tools-button';
import { ShareBuildButton } from '@/app/(builds)/builder/_components/share-build-button';
import { NewLinkedBuildButton } from '@/app/(builds)/builder/linked/_components/new-linked-build-button';
import { useDiscoveredItems } from '@/app/(items)/_hooks/use-discovered-items';

interface Props {
  activeBuildState: BuildState;
  mainBuildState: BuildState;
  buildVariantCount: number;
}

export function ViewBuild({
  activeBuildState,
  buildVariantCount,
  mainBuildState,
}: Props) {
  const { data: session, status: sessionStatus } = useSession();

  const router = useRouter();
  const buildContainerRef = useRef<HTMLDivElement>(null);

  const { discoveredItemIds } = useDiscoveredItems();
  const buildStateWithItemsOwned = setLocalBuildItemOwnership({
    buildState: activeBuildState,
    discoveredItemIds,
    sessionStatus,
  });

  const [showModeratorTooling, setShowModeratorTooling] = useState(false);

  const [itemOwnershipPreference, setItemOwnershipPreference] =
    useLocalStorage<ItemOwnershipPreference>(
      LOCALSTORAGE_KEY.ITEM_OWNERSHIP_PREFERENCE,
      false,
      { initializeWithValue: false },
    );

  const [detailedBuildDialogOpen, setDetailedBuildDialogOpen] = useState(false);
  const [signInRequiredDialogOpen, setSignInRequiredDialogOpen] =
    useState(false);

  const {
    isScreenshotMode,
    showControls,
    imageDownloadInfo,
    imageExportLoading,
    handleClearImageDownloadInfo,
    handleImageExport,
  } = useImageExport();

  const [optimisticUpvote, setOptimisticUpvote] = useOptimistic<
    boolean,
    boolean
  >(mainBuildState.upvoted, (_state, newUpvoted) => newUpvoted);

  function onFavoriteBuild() {
    startTransition(() => {
      // if user is not signed in, let them know signin is required
      if (!session?.user?.id) {
        setSignInRequiredDialogOpen(true);
        return;
      }

      setOptimisticUpvote(!optimisticUpvote);

      handleFavoriteBuild({
        buildState: mainBuildState,
        userId: session?.user?.id,
        onFavorite: () => router.refresh(),
      });
    });
  }

  // Need to convert the build data to a format that the BuildPage component can use
  if (!session?.user) {
    mainBuildState.upvoted = false;
    mainBuildState.reported = false;
  }

  // We need to convert the build.items object into an array of items to pass to the ToCsvButton
  const csvBuildData = buildStateToCsvData(activeBuildState);

  // #region RENDER

  return (
    <>
      <BuilderContainer
        buildContainerRef={buildContainerRef}
        buildState={buildStateWithItemsOwned}
        isEditable={false}
        isScreenshotMode={isScreenshotMode}
        itemOwnershipPreference={itemOwnershipPreference}
        showControls={showControls}
        builderActions={
          <>
            <DetailedBuildDialog
              buildState={activeBuildState}
              open={detailedBuildDialogOpen}
              onClose={() => setDetailedBuildDialogOpen(false)}
            />
            <ImageDownloadInfoDialog
              onClose={handleClearImageDownloadInfo}
              imageDownloadInfo={imageDownloadInfo}
            />
            <FavoriteBuildDialog
              open={signInRequiredDialogOpen}
              onClose={() => setSignInRequiredDialogOpen(false)}
            />

            {session &&
              session.user?.id !== mainBuildState.createdById &&
              session.user?.role === 'admin' && (
                <>
                  <ModeratorBuildToolsDialog
                    open={showModeratorTooling}
                    onClose={() => setShowModeratorTooling(false)}
                    buildToModerate={mainBuildState}
                  />
                  <ModeratorToolsButton
                    onClick={() => setShowModeratorTooling(true)}
                  />
                </>
              )}
            {session && session.user?.id === mainBuildState.createdById && (
              <EditBuildButton
                onClick={() =>
                  router.push(`/builder/edit/${mainBuildState.buildId}`)
                }
              />
            )}

            {session &&
              session.user?.id === mainBuildState.createdById &&
              buildVariantCount === 1 && (
                <NewLinkedBuildButton
                  onClick={() =>
                    router.push(
                      `/builder/linked/create/${mainBuildState.buildId}`,
                    )
                  }
                />
              )}

            <GenerateBuildImageButton
              imageExportLoading={imageExportLoading}
              onClick={() =>
                handleImageExport(
                  buildContainerRef.current,
                  `${activeBuildState.name}`,
                )
              }
            />

            <ShareBuildButton
              onClick={() => {
                const url = urlNoCache(window.location.href);
                copy(url);
                toast.success('Copied Build URL to clipboard.');
              }}
            />

            {mainBuildState.createdById !== session?.user?.id && (
              <FavoriteBuildButton
                upvoted={optimisticUpvote}
                onClick={onFavoriteBuild}
              />
            )}

            {session &&
              session.user?.id === mainBuildState.createdById &&
              mainBuildState.buildId && (
                <DeleteBuildButton buildId={mainBuildState.buildId} />
              )}

            <DetailedViewButton
              onClick={() => setDetailedBuildDialogOpen(true)}
            />

            <ItemOwnershipPreferenceButton
              onClick={() =>
                setItemOwnershipPreference(!itemOwnershipPreference)
              }
            />

            <DuplicateBuildButton
              onClick={() =>
                handleDuplicateBuild({
                  buildState: mainBuildState,
                  onDuplicate: (buildId: string) =>
                    router.push(`/builder/${buildId}`),
                })
              }
            />

            <ToCsvButton
              data={csvBuildData.filter((item) => item?.name !== '')}
              filename={`remnant2_builder_${activeBuildState.name}`}
              label="Export to CSV"
            />
          </>
        }
      />
    </>
  );
}
