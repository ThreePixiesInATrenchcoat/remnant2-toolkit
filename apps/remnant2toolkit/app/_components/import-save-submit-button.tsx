'use client';

import { BaseButton, Skeleton } from '@repo/ui';
import { useFormStatus } from 'react-dom';

export function ImportSaveSubmitButton({
  className,
  disabled = false,
  label,
}: {
  className: string;
  disabled?: boolean;
  label: string;
}) {
  const { pending } = useFormStatus();

  return (
    <BaseButton
      type="submit"
      aria-label="Submit Form"
      aria-disabled={pending || disabled}
      disabled={pending || disabled}
      className={className}
    >
      {!pending ? label : <Skeleton className="h-8 w-8" />}
    </BaseButton>
  );
}
