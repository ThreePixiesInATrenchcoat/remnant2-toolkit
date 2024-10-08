import { BaseButton } from '@repo/ui';

interface Props {
  onClick: () => void;
}

export function ItemSuggestionsButton({ onClick }: Props) {
  return (
    <BaseButton
      color="violet"
      aria-label="Find a list of items that match a specified item tag or effect."
      onClick={onClick}
      className="lg:w-full"
    >
      Item Suggestions
    </BaseButton>
  );
}
