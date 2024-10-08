import { Prisma } from '@repo/db';

import { archetypeItems } from '@/app/(items)/_constants/archetype-items';

const archetypeCount = archetypeItems.length;

export function limitByArchetypesSegment(archetypeIds: string[]) {
  if (archetypeIds.length === archetypeCount) {
    return Prisma.empty;
  }

  const allExcludedArchetypeIds = archetypeItems
    .map((item) => item.id)
    .filter((id) => !archetypeIds.includes(id));

  const excludeArchetypeIdsQuery =
    allExcludedArchetypeIds.length === 0
      ? Prisma.empty
      : Prisma.sql`
        AND BuildItems.buildId NOT IN (
          SELECT BuildItems.buildId
          FROM BuildItems
          WHERE BuildItems.itemId IN (${Prisma.join(allExcludedArchetypeIds)})
        )
      `;

  if (archetypeIds.length === 0) {
    return Prisma.empty;
  }

  if (archetypeIds.length === 1) {
    return Prisma.sql`AND (
  SELECT COUNT(*)
  FROM BuildItems
  WHERE BuildItems.buildId = Build.id
  AND BuildItems.itemId = ${archetypeIds[0]}
)`;
  }

  if (archetypeIds.length >= 2) {
    return Prisma.sql`AND (
  SELECT COUNT(*)
  FROM BuildItems
  WHERE BuildItems.buildId = Build.id
  AND BuildItems.itemId IN (${Prisma.join(archetypeIds)})
  ${excludeArchetypeIdsQuery}
)`;
  }
}

export function archetypeFiltersToIds({
  archetypes,
}: {
  archetypes: string[];
}): string[] {
  const archetypeIds: string[] = [];

  for (const archetype of archetypes) {
    const item = archetypeItems.find(
      (item) => item.name.toLowerCase() === archetype.toLowerCase(),
    )?.id;
    if (item) archetypeIds.push(item);
  }

  return archetypeIds;
}
