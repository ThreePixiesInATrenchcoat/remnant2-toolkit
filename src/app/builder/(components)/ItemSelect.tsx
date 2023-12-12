'use client'

import { type Item, ItemCategory } from '@/types'
import Dialog from '@/app/(components)/Dialog'
import ImageBuilderButton from './ImageBuilderButton'
import { useIsClient } from 'usehooks-ts'

export default function ItemSelect({
  itemList,
  buildSlot,
  open,
  onClose,
  onSelectItem,
}: {
  itemList: Item[]
  buildSlot: ItemCategory | null
  open: boolean
  onClose: () => void
  onSelectItem: (item: Item | null) => void
}) {
  const isClient = useIsClient()

  if (!buildSlot) {
    return null
  }

  if (!isClient) {
    return null
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={`Select ${buildSlot}`}
      maxWidthClass="max-w-6xl"
    >
      <ul
        role="list"
        className="flex flex-wrap items-start justify-center gap-4"
      >
        <li id="clear-item" className="mr-2 min-h-[70px] w-[90px]">
          <ImageBuilderButton
            item={null}
            showLabels={true}
            size="lg"
            onClick={() => onSelectItem(null)}
          />
        </li>
        {itemList.map((item) => (
          <li key={item.name} className="mr-2 min-h-[70px] w-[90px]">
            <ImageBuilderButton
              item={item}
              showLabels={true}
              size="lg"
              onClick={() => onSelectItem(item)}
            />
          </li>
        ))}
      </ul>
    </Dialog>
  )
}
