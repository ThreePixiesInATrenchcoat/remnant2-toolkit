import { BaseLink, cn } from '@repo/ui';

import { type WeaponItem } from '@/app/(items)/_types/weapon-item';

interface Props {
  item: WeaponItem;
  includeMod?: boolean;
}

export function WeaponInfo({ item, includeMod = true }: Props) {
  return (
    <dl className="flex w-full flex-grow flex-col justify-start">
      <dd className="flex w-full flex-row items-center justify-start">
        <div className="flex w-full flex-col items-start justify-start">
          <div
            className={cn(
              'mb-2 grid w-full',
              item.type === 'melee' ? 'grid-cols-1' : 'grid-cols-3',
            )}
          >
            <div className="flex w-full flex-col items-center justify-start text-gray-300">
              <p className="flex items-center justify-center text-sm">Damage</p>
              <span className="text-md flex items-center justify-center text-center font-bold">
                {item.damage}
              </span>
            </div>

            {item.type !== 'melee' && (
              <div className="flex w-full flex-col items-center justify-start text-gray-300">
                <p className="flex items-center justify-center text-sm">RPS</p>
                <span className="text-md flex items-center justify-center text-center font-bold">
                  {item.rps || '-'}
                </span>
              </div>
            )}

            {item.type !== 'melee' && (
              <div className="flex w-full flex-col items-center justify-start text-gray-300">
                <p className="flex items-center justify-center text-sm">
                  Magazine
                </p>
                <span className="text-md flex items-center justify-center text-center font-bold">
                  {item.magazine || '-'}
                </span>
              </div>
            )}
          </div>
          {item.accuracy && item.accuracy >= 0 ? (
            <div className="grid w-full grid-cols-2 gap-2 border border-transparent  py-1 text-left text-sm text-gray-300">
              <p className="flex items-center justify-start text-xs">
                Accuracy
              </p>
              <span className="flex items-center justify-end text-right text-xs font-bold">
                {item.accuracy}%
              </span>
            </div>
          ) : null}
          {item.ideal && item.ideal >= 0 && (
            <div className="grid w-full grid-cols-2 gap-2 border border-transparent  py-1 text-left text-sm text-gray-300">
              <p className="flex items-center justify-start text-xs">
                Ideal Range
              </p>
              <span className="flex items-center justify-end text-right text-xs font-bold">
                {item.ideal}m
              </span>
            </div>
          )}
          {item.falloff && item.falloff >= 0 ? (
            <div className="grid w-full grid-cols-2 gap-2 border border-transparent  py-1 text-left text-sm text-gray-300">
              <p className="flex items-center justify-start text-xs">
                Falloff Range
              </p>
              <span className="flex items-center justify-end text-right text-xs font-bold">
                {item.falloff}m
              </span>
            </div>
          ) : null}
          {item.ammo && item.ammo >= 0 && (
            <div className="grid w-full grid-cols-2 gap-2 border border-transparent  py-1 text-left text-sm text-gray-300">
              <p className="flex items-center justify-start text-xs">
                Max Ammo
              </p>
              <span className="flex items-center justify-end text-right text-xs font-bold">
                {item.ammo}
              </span>
            </div>
          )}
          {item.crit >= 0 ? (
            <div className="grid w-full grid-cols-2 gap-2 border border-transparent  py-1 text-left text-sm text-gray-300">
              <p className="flex items-center justify-start text-xs">
                Critical Hit Chance
              </p>
              <span className="flex items-center justify-end text-right text-xs font-bold">
                {item.crit}%
              </span>
            </div>
          ) : null}
          {item.weakspot >= 0 ? (
            <div className="grid w-full grid-cols-2 gap-2 border border-transparent  py-1 text-left text-sm text-gray-300">
              <p className="flex items-center justify-start text-xs">
                Weakspot Damage Bonus
              </p>
              <span className="flex items-center justify-end text-right text-xs font-bold">
                {item.weakspot}%
              </span>
            </div>
          ) : null}
          {item.stagger ? (
            <div className="grid w-full grid-cols-2 gap-2 border border-transparent  py-1 text-left text-sm text-gray-300">
              <p className="flex items-center justify-start text-xs">
                Stagger Modifier
              </p>
              <span className="flex items-center justify-end text-right text-xs font-bold">
                {item.stagger}%
              </span>
            </div>
          ) : null}
          {item.linkedItems?.mod && includeMod && (
            <div className="grid w-full grid-cols-2 gap-2 border border-transparent py-1 text-left text-sm text-gray-300">
              <p className="flex items-center justify-start text-xs">Mod</p>
              <BaseLink
                href={`/item-lookup?searchText=${item.linkedItems.mod.name}`}
                className="text-secondary-500 flex items-center justify-end text-right text-xs font-bold underline"
                target="_blank"
              >
                {item.linkedItems.mod.name}
              </BaseLink>
            </div>
          )}
        </div>
      </dd>
    </dl>
  );
}
