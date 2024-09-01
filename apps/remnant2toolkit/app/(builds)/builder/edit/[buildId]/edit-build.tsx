'use client';

import { type BuildTags } from '@repo/db';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';

import { useBuildActions } from '@/app/(builds)/_hooks/use-build-actions';
import { type BuildState } from '@/app/(builds)/_types/build-state';
import { type DBBuild } from '@/app/(builds)/_types/db-build';
import { dbBuildToBuildState } from '@/app/(builds)/_utils/db-build-to-build-state';
import {
  type UpdateBuildCategory,
  updateBuildState,
} from '@/app/(builds)/_utils/update-build-state';
import { BuilderContainer } from '@/app/(builds)/builder/_components/builder-container';
import { ArmorCalculatorButton } from '@/app/(builds)/builder/_components/buttons/armor-calculator-button';
import { DeleteBuildButton } from '@/app/(builds)/builder/_components/buttons/delete-build-button';
import { DetailedViewButton } from '@/app/(builds)/builder/_components/buttons/detailed-view-button';
import { ItemSuggestionsButton } from '@/app/(builds)/builder/_components/buttons/item-suggestions-button';
import { SaveBuildButton } from '@/app/(builds)/builder/_components/buttons/save-build-button';
import { ArmorSuggestionDialog } from '@/app/(builds)/builder/_components/dialogs/armor-suggestion-dialog';
import { DetailedBuildDialog } from '@/app/(builds)/builder/_components/dialogs/detailed-build-dialog';
import { ImageDownloadInfoDialog } from '@/app/(builds)/builder/_components/dialogs/image-download-info-dialog';
import { ItemTagSuggestionDialog } from '@/app/(items)/_components/item-tag-suggestion-dialog';

interface Props {
  build: DBBuild;
}

export function EditBuild({ build }: Props) {
  const { data: session } = useSession();

  const [buildState, setBuildState] = useState<BuildState>(
    dbBuildToBuildState(build),
  );

  const [detailedBuildDialogOpen, setDetailedBuildDialogOpen] = useState(false);

  const {
    isScreenshotMode,
    showControls,
    imageDownloadInfo,
    handleClearImageDownloadInfo,
  } = useBuildActions();

  const buildContainerRef = useRef<HTMLDivElement>(null);

  const [showArmorCalculator, setShowArmorCalculator] = useState(false);
  const [showItemTagSuggestions, setShowItemTagSuggestions] = useState(false);

  function handleSelectArmorSuggestion(newBuildState: BuildState) {
    setBuildState(newBuildState);
    setShowArmorCalculator(false);
    setShowItemTagSuggestions(false);
  }

  function handleUpdateBuildState({
    buildState,
    category,
    value,
  }: {
    buildState: BuildState;
    category: UpdateBuildCategory;
    value: string | Array<string | undefined> | BuildTags[];
  }) {
    const updatedBuildState = updateBuildState({
      buildState,
      category,
      value,
    });
    setBuildState(updatedBuildState);
  }

  return (
    <BuilderContainer
      buildContainerRef={buildContainerRef}
      buildState={buildState}
      isEditable={true}
      isScreenshotMode={isScreenshotMode}
      itemOwnershipPreference={false}
      showControls={showControls}
      onUpdateBuildState={handleUpdateBuildState}
      builderActions={
        <>
          <DetailedBuildDialog
            buildState={buildState}
            open={detailedBuildDialogOpen}
            onClose={() => setDetailedBuildDialogOpen(false)}
          />

          <ImageDownloadInfoDialog
            onClose={handleClearImageDownloadInfo}
            imageDownloadInfo={imageDownloadInfo}
          />

          <ArmorSuggestionDialog
            buildState={buildState}
            open={showArmorCalculator}
            onClose={() => setShowArmorCalculator(false)}
            onApplySuggestions={handleSelectArmorSuggestion}
          />

          <ItemTagSuggestionDialog
            buildState={buildState}
            open={showItemTagSuggestions}
            onClose={() => setShowItemTagSuggestions(false)}
            onApplySuggestions={handleSelectArmorSuggestion}
          />

          <SaveBuildButton buildState={buildState} editMode={true} />

          <ArmorCalculatorButton onClick={() => setShowArmorCalculator(true)} />

          <ItemSuggestionsButton
            onClick={() => setShowItemTagSuggestions(true)}
          />

          {session &&
            session.user?.id === buildState.createdById &&
            buildState.buildId && (
              <DeleteBuildButton buildId={buildState.buildId} />
            )}

          <DetailedViewButton
            onClick={() => setDetailedBuildDialogOpen(true)}
          />
        </>
      }
    />
  );
}
