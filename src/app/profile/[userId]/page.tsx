'use client'

import { useSearchParams } from 'next/navigation'

import { BuildListFilters } from '@/features/filters/components/BuildListFilters'
import { parseFiltersFromUrl } from '@/features/filters/lib/parseFiltersFromUrl'
import { ProfileHeader } from '@/features/profile/ProfileHeader'

import { UserProfile } from '../../../features/profile/UserProfile'

const ITEMS_PER_PAGE = 16

export default function Page({
  params: { userId },
}: {
  params: { userId: string }
}) {
  const searchParams = useSearchParams()
  const buildListFilters = parseFiltersFromUrl(searchParams)

  return (
    <>
      <div className="my-4 flex w-full max-w-lg flex-col items-center justify-center">
        <ProfileHeader editable={false} userId={userId} />
      </div>
      <div className="mb-8 flex w-full max-w-2xl items-center justify-center">
        <BuildListFilters
          filters={buildListFilters}
          key="user-profile-filters"
        />
      </div>
      {buildListFilters && (
        <UserProfile
          buildListFilters={buildListFilters}
          itemsPerPage={ITEMS_PER_PAGE}
          userId={userId}
        />
      )}
    </>
  )
}
