import { Skeleton } from '@repo/ui';
import { getArrayOfLength } from '@repo/utils';

export function LoadoutSkeleton() {
  return getArrayOfLength(8).map((_, index) => (
    <Skeleton className="h-[440px] w-[295px]" key={index} />
  ));
}
