import { type BuildState } from '@/app/(builds)/_types/build-state';

import { getItemsByKey } from './lib';

export function getTotalWeight(buildState: BuildState) {
  const equippedWeightIncreaseItems = getItemsByKey(buildState, 'weight');
  const equippedWeightPercentItems = getItemsByKey(buildState, 'weightPercent');

  const totalWeightIncrease = equippedWeightIncreaseItems.reduce(
    (acc, item) => acc + (item?.weight ?? 0),
    0,
  );

  const totalWeightPercent = equippedWeightPercentItems.reduce(
    (acc, item) => acc + (item?.weightPercent ?? 0),
    0,
  );

  const totalWeight = totalWeightIncrease * (1 + totalWeightPercent);
  return totalWeight < 0 ? '0.00' : totalWeight.toFixed(2);
}
