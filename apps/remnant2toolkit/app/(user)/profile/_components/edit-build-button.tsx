'use client';

import { BaseButton, EditIcon } from '@repo/ui';
import { useRouter } from 'next/navigation';

import { Tooltip } from '@/app/_components/tooltip';

export function EditBuildButton({ buildId }: { buildId: string }) {
  const router = useRouter();

  function handleEditBuild() {
    router.push(`/builder/edit/${buildId}`);
  }

  return (
    <Tooltip content="Edit Build">
      <BaseButton
        color="green"
        onClick={handleEditBuild}
        aria-label="Edit Build"
      >
        <EditIcon className="h-4 w-4" />
      </BaseButton>
    </Tooltip>
  );
}
