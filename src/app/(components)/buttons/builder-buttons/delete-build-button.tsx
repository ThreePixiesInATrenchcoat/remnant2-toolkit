'use client'

import { useState } from 'react'

import { Button } from '@/app/(components)/_base/button'
import { DeleteBuildAlert } from '@/app/(components)/alerts/delete-build-alert'
import { useBuildActions } from '@/app/(hooks)/use-build-actions'

interface Props {
  buildId: string
}

export function DeleteBuildButton({ buildId }: Props) {
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false)
  const { handleDeleteBuild } = useBuildActions()

  return (
    <>
      <DeleteBuildAlert
        open={deleteAlertOpen}
        onClose={() => setDeleteAlertOpen(false)}
        onDelete={() => handleDeleteBuild({ buildId })}
      />
      <Button
        color="red"
        aria-label="Delete build."
        onClick={() => setDeleteAlertOpen(true)}
        className="sm:w-full"
      >
        Delete Build
      </Button>
    </>
  )
}
