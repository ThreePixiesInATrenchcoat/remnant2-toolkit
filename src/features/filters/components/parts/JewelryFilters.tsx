import { remnantItems } from '@/features/items/data/remnantItems'
import { AmuletItem } from '@/features/items/types/AmuletItem'
import { RingItem } from '@/features/items/types/RingItem'
import { SelectMenu } from '@/features/ui/SelectMenu'

export const DEFAULT_JEWELRY_FILTERS = {
  amulet: 'All',
  ring: 'All',
}

const allRings: string[] = remnantItems
  .filter((item) => RingItem.isRingItem(item))
  .map((item) => item.name)
allRings.unshift(DEFAULT_JEWELRY_FILTERS.ring)

const allAmulets: string[] = remnantItems
  .filter((item) => AmuletItem.isAmuletItem(item))
  .map((item) => item.name)
allAmulets.unshift(DEFAULT_JEWELRY_FILTERS.amulet)

interface Props {
  selectedRings: {
    ring1: string
    ring2: string
    ring3: string
    ring4: string
  }
  selectedAmulet: string
  onChangeRing: (ring: string, slot: number) => void
  onChangeAmulet: (amulet: string) => void
}

export function JewelryFilters({
  selectedRings,
  selectedAmulet,
  onChangeRing,
  onChangeAmulet,
}: Props) {
  return (
    <div className="col-span-full pt-2">
      <div className="flex w-full flex-col items-start justify-start">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-left sm:grid-cols-3 sm:gap-y-0">
          <div className="col-span-full sm:col-span-1">
            <SelectMenu
              name="amulet"
              label="By Amulet"
              value={selectedAmulet}
              options={allAmulets.map((amulet) => ({
                label: amulet,
                value: amulet,
              }))}
              onChange={(e) => onChangeAmulet(e.target.value)}
            />
          </div>
          <div className="col-span-full grid grid-cols-1 gap-4 sm:col-span-2 sm:grid-cols-2">
            <SelectMenu
              name="ring"
              label="By Ring"
              value={selectedRings.ring1}
              options={allRings.map((ring) => ({
                label: ring,
                value: ring,
              }))}
              onChange={(e) => onChangeRing(e.target.value, 1)}
            />
            <SelectMenu
              name="ring"
              label="By Ring"
              value={selectedRings.ring2}
              options={allRings.map((ring) => ({
                label: ring,
                value: ring,
              }))}
              onChange={(e) => onChangeRing(e.target.value, 2)}
            />
            <SelectMenu
              name="ring"
              label="By Ring"
              value={selectedRings.ring3}
              options={allRings.map((ring) => ({
                label: ring,
                value: ring,
              }))}
              onChange={(e) => onChangeRing(e.target.value, 3)}
            />
            <SelectMenu
              name="ring"
              label="By Ring"
              value={selectedRings.ring4}
              options={allRings.map((ring) => ({
                label: ring,
                value: ring,
              }))}
              onChange={(e) => onChangeRing(e.target.value, 4)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
