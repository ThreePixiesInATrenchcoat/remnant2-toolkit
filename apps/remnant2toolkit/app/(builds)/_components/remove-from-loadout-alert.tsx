import {
  BaseAlert,
  BaseAlertActions,
  BaseAlertDescription,
  BaseAlertTitle,
  BaseButton,
} from '@repo/ui';

interface Props {
  open: boolean;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

export function RemoveFromLoadoutAlert({
  open,
  onCancel,
  onClose,
  onConfirm,
}: Props) {
  return (
    <BaseAlert open={open} onClose={onClose}>
      <BaseAlertTitle>Remove From Loadout?</BaseAlertTitle>
      <BaseAlertDescription>
        Are you sure you want to remove this build from your loadout?
      </BaseAlertDescription>
      <BaseAlertActions>
        <BaseButton plain onClick={onCancel}>
          Cancel
        </BaseButton>
        <BaseButton onClick={onConfirm}>Remove</BaseButton>
      </BaseAlertActions>
    </BaseAlert>
  );
}
