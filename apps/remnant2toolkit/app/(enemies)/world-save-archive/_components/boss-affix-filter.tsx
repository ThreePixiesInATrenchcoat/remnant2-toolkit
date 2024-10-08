import {
  BaseField,
  BaseLabel,
  BaseListbox,
  BaseListboxLabel,
  BaseListboxOption,
} from '@repo/ui';

import { DEFAULT_FILTER } from '@/app/_types/default-filter';
import { ALL_BOSS_AFFIXES } from '@/app/(enemies)/world-save-archive/_constants/all-boss-affixes';

interface Props {
  value: string[];
  onChange: (value: string[]) => void;
}

export function BossAffixFilter({ value, onChange }: Props) {
  const options = ALL_BOSS_AFFIXES.map((affix) => ({
    label: affix.name as string,
    value: affix.name as string,
  }));
  options.unshift({ label: DEFAULT_FILTER, value: DEFAULT_FILTER });

  return (
    <BaseField>
      <BaseLabel>Affixes</BaseLabel>
      <BaseListbox multiple name="affixes" value={value} onChange={onChange}>
        {options.map(({ label, value }) => (
          <BaseListboxOption key={value} value={value}>
            <BaseListboxLabel>{label}</BaseListboxLabel>
          </BaseListboxOption>
        ))}
      </BaseListbox>
    </BaseField>
  );
}
