'use server';

import { prisma } from '@repo/db';
import { revalidatePath } from 'next/cache';

import { getSession } from '@/app/(user)/_auth/services/sessionService';

export async function addBuildToLoadout(
  buildId: string,
  slot: number,
): Promise<{ success: boolean }> {
  const session = await getSession();
  if (!session || !session.user) {
    return { success: false };
  }

  // Add a vote for the build
  const isVoteRegistered = await prisma.buildVoteCounts.findFirst({
    where: {
      buildId,
      userId: session.user.id,
    },
  });
  if (!isVoteRegistered) {
    await prisma.buildVoteCounts.create({
      data: {
        buildId,
        userId: session.user.id,
      },
    });
  }

  const existingLoadout = await prisma.userLoadouts.findFirst({
    where: {
      userId: session.user.id,
      slot: slot,
    },
  });

  await prisma.userLoadouts.upsert({
    where: {
      id: existingLoadout?.id || '',
    },
    update: {
      buildId,
    },
    create: {
      userId: session.user.id,
      slot,
      buildId,
    },
  });

  revalidatePath(`/profile/${session.user.id}/loadouts`);
  revalidatePath(`/builder/${buildId}`, 'page');

  return { success: true };
}
