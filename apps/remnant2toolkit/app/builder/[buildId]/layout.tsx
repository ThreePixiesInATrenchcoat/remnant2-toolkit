import { Metadata, ResolvingMetadata } from 'next'

import { getBuild } from '@/app/(actions)/builds/get-build'
import { PageHeader } from '@/app/(components)/page-header'
import { dbBuildToBuildState } from '@/app/(utils)/builds/db-build-to-build-state'
import {
  ArchetypeName,
  getArchetypeComboName,
} from '@/app/(utils)/builds/get-archetype-combo-name'
import { isErrorResponse } from '@/app/(utils)/is-error-response'

export async function generateMetadata(
  { params: { buildId } }: { params: { buildId: string } },
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const buildData = await getBuild(buildId)
  if (isErrorResponse(buildData)) {
    console.info(buildData.errors)
    return {
      title: 'Error loading build',
      description:
        'There was an error loading this build. It may have been removed',
      openGraph: {
        title: 'Error loading build',
        description:
          'There was an error loading this build. It may have been removed',
        url: `https://remnant2toolkit.com/builder/${buildId}`,
        images: [
          {
            url: 'https://d2sqltdcj8czo5.cloudfront.net/remnant2/misc/og-image-sm.jpg',
            width: 150,
            height: 150,
          },
        ],
        type: 'website',
      },
      twitter: {
        title: 'Error loading build',
        description:
          'There was an error loading this build. It may have been removed',
      },
    }
  }

  const { build } = buildData

  if (!build.isPublic) {
    return {
      title: 'Private Build',
      description: 'This build is private.',
      openGraph: {
        title: 'Private Build',
        description: 'This build is private.',
        url: `https://remnant2toolkit.com/builder/${build.id}`,
        images: [
          {
            url: 'https://d2sqltdcj8czo5.cloudfront.net/remnant2/misc/og-image-sm.jpg',
            width: 150,
            height: 150,
          },
        ],
        type: 'website',
      },
      twitter: {
        title: 'Private Build',
        description: 'This build is private.',
      },
    }
  }

  const buildState = dbBuildToBuildState(build)
  const archetypes = buildState.items.archetype.map(
    (a) => a?.name.toLowerCase(),
  )
  const buildLabel = getArchetypeComboName({
    archetype1: (archetypes[0] as ArchetypeName) ?? null,
    archetype2: (archetypes[1] as ArchetypeName) ?? null,
  })

  const title = `${build.name} by ${build.createdByDisplayName}`
  let description = `${buildLabel} Build`
  description += `\r\n`
  description += `\r\n`
  description +=
    build.description ?? 'A Remnant 2 Build, generated by Remnant 2 Toolkit'

  return {
    title,
    description,
    openGraph: {
      title,
      description: description,
      siteName: 'Remnant 2 Toolkit',
      url: `https://remnant2toolkit.com/builder/${build.id}`,
      images: [
        {
          url: 'https://d2sqltdcj8czo5.cloudfront.net/remnant2/misc/og-image-sm.jpg',
          width: 150,
          height: 150,
        },
      ],
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
  }
}

export default async function Layout({
  params: { buildId },
  children,
}: {
  params: { buildId: string }
  children: React.ReactNode
}) {
  const buildData = await getBuild(buildId)
  if (isErrorResponse(buildData)) {
    console.info(buildData.errors)
    return (
      <div className="flex max-w-lg flex-col">
        <PageHeader
          title="Something went wrong!"
          subtitle="The build either can't be found or is marked private."
        />
      </div>
    )
  }

  return <>{children}</>
}
