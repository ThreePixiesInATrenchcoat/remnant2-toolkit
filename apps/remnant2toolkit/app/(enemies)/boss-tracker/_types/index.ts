import { type DefaultFilter } from '@/app/_types/default-filter';
import { type BossCategory } from '@/app/(enemies)/_types';

export interface BossTrackerFilters {
  categories: string[] | [DefaultFilter];
  searchText: string | '';
}

export const BOSS_TRACKER_KEYS = {
  CATEGORIES: 'categories',
  SEARCHTEXT: 'searchText',
} as const satisfies Record<string, keyof BossTrackerFilters>;

export interface BossTrackerCategory {
  category: BossCategory;
  label: string;
}
