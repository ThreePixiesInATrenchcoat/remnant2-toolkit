import { BaseDialog, BaseDialogBody, BaseDialogTitle } from '@repo/ui';

interface Props {
  children: React.ReactNode;
  title: string;
  open: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClose: () => void;
}

export default function GenericDialog({
  children,
  open,
  title,
  onClose,
}: Props) {
  return (
    <BaseDialog open={open} onClose={onClose} size="md">
      <BaseDialogTitle>{title}</BaseDialogTitle>
      <BaseDialogBody>
        <div className="flex w-full flex-col items-start justify-center gap-y-4 text-left text-sm">
          {children}
        </div>
      </BaseDialogBody>
    </BaseDialog>
  );
}
