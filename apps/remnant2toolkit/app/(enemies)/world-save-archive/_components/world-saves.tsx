'use client';

import { BaseButton } from '@repo/ui';
import isEqual from 'lodash.isequal';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { DEFAULT_FILTER } from '@/app/_types/default-filter';
import { WorldSaveCard } from '@/app/(enemies)/world-save-archive/_components/world-save-card';
import { DEFAULT_WORLD_SAVE_FILTERS } from '@/app/(enemies)/world-save-archive/_components/world-save-filters';
import { ALL_BOSSES } from '@/app/(enemies)/world-save-archive/_constants/all-bosses';
import { worldSaves } from '@/app/(enemies)/world-save-archive/_constants/world-saves';
import {
  type FilteredWorldSave,
  type WorldSaveFilters,
} from '@/app/(enemies)/world-save-archive/_types';
import { parseUrlFilters } from '@/app/(enemies)/world-save-archive/_utils/parse-url-filters';

function getFilteredSaves(filters: WorldSaveFilters): FilteredWorldSave[] {
  let filteredSaves: FilteredWorldSave[] = worldSaves.map((s) => {
    const bossItem = ALL_BOSSES.find((b) => b.name === s.bossName);
    return {
      ...s,
      imagePath: bossItem?.imagePath || '',
    };
  });

  // If boss name is not default, filter by boss name
  if (filters.bossName !== DEFAULT_FILTER) {
    filteredSaves = filteredSaves.filter(
      (s) => s.bossName === filters.bossName,
    );
  }

  // if boss affixes are not default, filter by boss affixes
  if (
    filters.bossAffixes.length > 0 &&
    !filters.bossAffixes.some((a) => a === DEFAULT_FILTER)
  ) {
    // Need to only get saves that have at least two of the affixes
    // If only one affix is in the filters.affixes, show all saves that have that affix
    filteredSaves = filteredSaves.filter((save) => {
      const matchingAffixes = save.bossAffixes.filter((affix) =>
        filters.bossAffixes
          .filter((affix) => affix !== DEFAULT_FILTER)
          .includes(affix),
      );

      if (filters.bossAffixes.length === 1) {
        return matchingAffixes.length > 0;
      } else {
        return matchingAffixes.length >= 2;
      }
    });
  }

  // if releases are not default, filter by releases
  if (
    filters.releases.length > 0 &&
    !filters.releases.some((r) => r === DEFAULT_FILTER)
  ) {
    filteredSaves = filteredSaves.filter((save) =>
      filters.releases
        .filter((release) => release !== DEFAULT_FILTER)
        .includes(save.release),
    );
  }

  // sort by boss name, then by affixes
  filteredSaves = filteredSaves.sort((a, b) => {
    if (a.bossName < b.bossName) return -1;
    if (a.bossName > b.bossName) return 1;
    if (a.bossAffixes.join('') < b.bossAffixes.join('')) return -1;
    if (a.bossAffixes.join('') > b.bossAffixes.join('')) return 1;
    return 0;
  });

  return filteredSaves;
}

export function WorldSaves() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState(parseUrlFilters(searchParams));

  const [areFiltersApplied, setAreFiltersApplied] = useState(
    !isEqual(filters, DEFAULT_WORLD_SAVE_FILTERS),
  );

  useEffect(() => {
    setFilters(parseUrlFilters(searchParams));
  }, [searchParams]);

  useEffect(() => {
    if (!isEqual(filters, DEFAULT_WORLD_SAVE_FILTERS)) {
      setAreFiltersApplied(true);
    }
  }, [filters]);

  const filteredSaves = getFilteredSaves(filters);

  // #region Render

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-auto p-4">
      {!areFiltersApplied && (
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-primary-500 text-center text-2xl font-bold">
            Apply a filter to search the {worldSaves.length} world saves, or...
          </h2>

          <BaseButton onClick={() => setAreFiltersApplied(true)}>
            Show All World Saves
          </BaseButton>
        </div>
      )}
      {filteredSaves.length === 0 && (
        <h2 className="text-primary-500 text-center text-2xl font-bold">
          No items found
        </h2>
      )}

      {filteredSaves.length > 0 && areFiltersApplied && (
        <h2 className="text-primary-500 my-4 text-2xl font-bold">
          World Saves ({filteredSaves.length} Results)
        </h2>
      )}

      {areFiltersApplied ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredSaves.map((save) => (
            <WorldSaveCard
              key={`${save.bossName}-${save.bossAffixes.join(',')}`}
              saveItem={save}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
