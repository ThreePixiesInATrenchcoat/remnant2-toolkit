'use server';

import { Prisma, prisma } from '@repo/db';
import { bigIntFix } from '@repo/utils';

import { limitToQualityBuilds } from '@/app/(builds)/_libs/build-filters/limit-by-quality';
import { limitToNonVariantBuilds } from '@/app/(builds)/_libs/build-filters/limit-to-non-variant-builds';
import { type DBBuild } from '@/app/(builds)/_types/db-build';
import { getSession } from '@/app/(user)/_auth/services/sessionService';

export async function getQualityBuildFeed(): Promise<{
  builds: DBBuild[];
}> {
  const session = await getSession();
  const userId = session?.user?.id;

  const query = Prisma.sql`
  SELECT Build.*, 
  User.name as createdByName, 
  User.displayName as createdByDisplayName,
  (SELECT COUNT(*) FROM BuildVoteCounts WHERE BuildVoteCounts.buildId = Build.id) as totalUpvotes,
  0 as totalReports,
  FALSE as reported,
  CASE WHEN EXISTS (
    SELECT 1
    FROM BuildVoteCounts
    WHERE BuildVoteCounts.buildId = Build.id
    AND BuildVoteCounts.userId = ${userId}
  ) THEN TRUE ELSE FALSE END as upvoted,
  CASE WHEN PaidUsers.userId IS NOT NULL THEN 1 ELSE 0 END as isMember
  FROM Build
  LEFT JOIN User on Build.createdById = User.id
  LEFT JOIN PaidUsers on User.id = PaidUsers.userId
  LEFT JOIN BuildTags on Build.id = BuildTags.buildId
  LEFT JOIN (
    SELECT 
        BuildItems.buildId,
        SUM(CASE WHEN BuildItems.category = 'archtype' THEN 1 ELSE 0 END) as archtypeCount,
        SUM(CASE WHEN BuildItems.category = 'skill' THEN 1 ELSE 0 END) as skillCount,
        SUM(CASE WHEN BuildItems.category = 'helm' THEN 1 ELSE 0 END) as helmCount,
        SUM(CASE WHEN BuildItems.category = 'torso' THEN 1 ELSE 0 END) as torsoCount,
        SUM(CASE WHEN BuildItems.category = 'gloves' THEN 1 ELSE 0 END) as glovesCount,
        SUM(CASE WHEN BuildItems.category = 'legs' THEN 1 ELSE 0 END) as legsCount,
        SUM(CASE WHEN BuildItems.category = 'relic' THEN 1 ELSE 0 END) as relicCount,
        SUM(CASE WHEN BuildItems.category = 'relicfragment' THEN 1 ELSE 0 END) as relicfragmentCount,
        SUM(CASE WHEN BuildItems.category = 'weapon' THEN 1 ELSE 0 END) as weaponCount,
        SUM(CASE WHEN BuildItems.category = 'mod' THEN 1 ELSE 0 END) as modCount,
        SUM(CASE WHEN BuildItems.category = 'mutator' THEN 1 ELSE 0 END) as mutatorCount,
        SUM(CASE WHEN BuildItems.category = 'amulet' THEN 1 ELSE 0 END) as amuletCount,
        SUM(CASE WHEN BuildItems.category = 'ring' THEN 1 ELSE 0 END) as ringCount,
        SUM(CASE WHEN BuildItems.category = 'trait' THEN BuildItems.amount ELSE 0 END) as traitSum
    FROM BuildItems
    GROUP BY BuildItems.buildId
  ) as ItemCounts ON Build.id = ItemCounts.buildId
  WHERE Build.isPublic = true
  AND Build.isPatchAffected = false
  ${limitToQualityBuilds(true)}
  ${limitToNonVariantBuilds(true)}
  GROUP BY Build.id, User.id
  ORDER BY createdAt DESC
  LIMIT 4 
  `;

  const builds = await prisma.$queryRaw<DBBuild[]>(query);

  // Then, for each Build, get the associated BuildItems
  for (const build of builds) {
    const buildItems = await prisma.buildItems.findMany({
      where: { buildId: build.id },
    });
    build.buildItems = buildItems;
  }

  // Then, for each Build, get the associated BuildTags
  for (const build of builds) {
    const buildTags = await prisma.buildTags.findMany({
      where: { buildId: build.id },
    });
    build.buildTags = buildTags;
  }

  return bigIntFix({
    builds,
  });
}
