import GenericDialog from '@/app/_components/generic-dialog';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function FavoriteBuildDialog({ open, onClose }: Props) {
  return (
    <GenericDialog
      open={open}
      onClose={() => onClose()}
      title="Sign In Required"
    >
      <p>
        You must be signed in to favorite builds. Favorited builds will always
        be available in your profile, can be used in your loadouts, and will
        support the creator by increasing the build&apos;s visibility.
      </p>
      <p>Sign in or create an account to favorite this build.</p>
    </GenericDialog>
  );
}
