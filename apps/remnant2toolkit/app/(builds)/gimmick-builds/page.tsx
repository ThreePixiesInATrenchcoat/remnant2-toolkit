'use client';

import { DISCORD_INVITE_URL } from '@repo/constants';
import { BaseText, BaseTextLink } from '@repo/ui';
import { useCallback, useState } from 'react';

import { PageHeader } from '@/app/_components/page-header';
import { NAV_ITEMS } from '@/app/_types/navigation';
import { DEFAULT_ITEMS_PER_PAGE } from '@/app/_utils/pagination/constants';
import { BuildFilters } from '@/app/(builds)/_components/filters/build-filters';
import { GimmickBuilds } from '@/app/(builds)/gimmick-builds/gimmick-builds';

export default function Page() {
  const [loadingResults, setLoadingResults] = useState(false);

  const handleToggleLoadingResults = useCallback(
    (isLoading: boolean) => setLoadingResults(isLoading),
    [],
  );

  return (
    <>
      <PageHeader
        title="Gimmick Builds"
        subtitle={
          <div className="flex flex-col">
            <BaseText>{NAV_ITEMS.gimmickBuilds.description}</BaseText>
            <BaseTextLink href={DISCORD_INVITE_URL}>
              <span className="text-primary-500">
                Want to feature a gimmick build? Join the Remnant 2 Toolkit
                Discord!
              </span>
            </BaseTextLink>
          </div>
        }
      />

      <div className="flex w-full items-center justify-center sm:mb-6">
        <BuildFilters
          key="gimmick-build-filters"
          loadingResults={loadingResults}
        />
      </div>
      <div className="mb-2 grid w-full grid-cols-1 gap-2">
        <GimmickBuilds
          itemsPerPage={DEFAULT_ITEMS_PER_PAGE}
          onToggleLoadingResults={handleToggleLoadingResults}
        />
      </div>
    </>
  );
}
