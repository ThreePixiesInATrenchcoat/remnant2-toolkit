'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { usePagination } from '@/app/_hooks/use-pagination';
import { BuildCard } from '@/app/(builds)/_components/build-card';
import { BuildList } from '@/app/(builds)/_components/build-list';
import { DEFAULT_BUILD_FILTERS } from '@/app/(builds)/_components/filters/build-filters';
import { BuildSecondaryFilters } from '@/app/(builds)/_components/filters/secondary-filters';
import { useOrderByFilter } from '@/app/(builds)/_components/filters/secondary-filters/order-by-filter/use-order-by-filter';
import { useTimeRangeFilter } from '@/app/(builds)/_components/filters/secondary-filters/time-range-filter/use-time-range-filter';
import { type BuildListFilters } from '@/app/(builds)/_components/filters/types';
import { parseUrlFilters } from '@/app/(builds)/_components/filters/utils';
import { useBuildListState } from '@/app/(builds)/_hooks/use-build-list-state';
import { getFavoritedBuilds } from '@/app/(user)/profile/[profileId]/favorited-builds/_actions/get-favorited-builds';

const ITEMS_PER_PAGE = 16;

interface Props {
  buildFiltersOverrides?: Partial<BuildListFilters>;
  onToggleLoadingResults: (isLoading: boolean) => void;
}

export function FavoritedBuildsList({
  buildFiltersOverrides,
  onToggleLoadingResults,
}: Props) {
  const defaultFilters = useMemo(() => {
    return buildFiltersOverrides
      ? { ...DEFAULT_BUILD_FILTERS, ...buildFiltersOverrides }
      : DEFAULT_BUILD_FILTERS;
  }, [buildFiltersOverrides]);

  const searchParams = useSearchParams();
  const [buildListFilters, setBuildListFilters] = useState(
    parseUrlFilters(searchParams, defaultFilters),
  );

  const { buildListState, setBuildListState } = useBuildListState();
  const { builds, totalBuildCount, isLoading } = buildListState;

  const { orderBy, handleOrderByChange } = useOrderByFilter('newest');
  const { timeRange, handleTimeRangeChange } = useTimeRangeFilter('all-time');

  const {
    currentPage,
    firstVisibleItemNumber,
    lastVisibleItemNumber,
    pageNumbers,
    totalPages,
    handleSpecificPageClick,
    handleNextPageClick,
    handlePreviousPageClick,
  } = usePagination({
    totalItemCount: totalBuildCount,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  useEffect(() => {
    setBuildListFilters(parseUrlFilters(searchParams, defaultFilters));
    setBuildListState((prevState) => ({ ...prevState, isLoading: true }));
  }, [searchParams, defaultFilters, setBuildListState]);

  useEffect(() => {
    onToggleLoadingResults(isLoading);
  }, [isLoading, onToggleLoadingResults]);

  // Whenever loading is set to true, we should update the build items
  useEffect(() => {
    const getItemsAsync = async () => {
      if (!isLoading) return;
      const response = await getFavoritedBuilds({
        buildListFilters,
        itemsPerPage: ITEMS_PER_PAGE,
        orderBy,
        pageNumber: currentPage,
        timeRange,
      });
      setBuildListState((prevState) => ({
        ...prevState,
        isLoading: false,
        builds: response.builds,
        totalBuildCount: response.totalBuildCount,
      }));
    };
    getItemsAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <>
      <BuildList
        currentPage={currentPage}
        isLoading={isLoading}
        isWithQuality={buildListFilters.withQuality}
        label="Favorited Builds"
        pageNumbers={pageNumbers}
        totalItems={totalBuildCount}
        totalPages={totalPages}
        firstVisibleItemNumber={firstVisibleItemNumber}
        lastVisibleItemNumber={lastVisibleItemNumber}
        onPreviousPage={handlePreviousPageClick}
        onNextPage={handleNextPageClick}
        onSpecificPage={handleSpecificPageClick}
        headerActions={
          <BuildSecondaryFilters
            isLoading={isLoading}
            orderBy={orderBy}
            onOrderByChange={(value) => {
              handleOrderByChange(value);
              setBuildListState((prevState) => ({
                ...prevState,
                isLoading: true,
              }));
            }}
            timeRange={timeRange}
            onTimeRangeChange={(value) => {
              handleTimeRangeChange(value);
              setBuildListState((prevState) => ({
                ...prevState,
                isLoading: true,
              }));
            }}
          />
        }
      >
        <ul
          role="list"
          className="mb-4 mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {builds.map((build) => (
            <div key={build.id} className="w-full">
              <BuildCard
                build={build}
                isLoading={isLoading}
                footerActions={undefined}
              />
            </div>
          ))}
        </ul>
      </BuildList>
    </>
  );
}
