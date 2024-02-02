import { isErrorResponse } from '@/features/error-handling/isErrorResponse'
import { getBuild } from '../actions'
import BuildPage from './page'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  { params: { buildId } }: { params: { buildId: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const buildData = await getBuild(buildId)
  if (isErrorResponse(buildData)) {
    console.error(buildData.errors)
    throw new Error(
      `Build ${buildId} is not found. If you are sure the build exists, it may be marked private.`,
    )
  }

  const { build } = buildData

  if (!build.isPublic) {
    return {
      title: 'Private Build',
      description: 'This build is private.',
      openGraph: {
        title: 'Private Build',
        description: 'This build is private.',
        url: `https://remnant2builder.com/builder/${build.id}`,
        images: ['https://d2sqltdcj8czo5.cloudfront.net/og_image_small.png'],
        type: 'website',
      },
      twitter: {
        title: 'Private Build',
        description: 'This build is private.',
        images: ['https://d2sqltdcj8czo5.cloudfront.net/og_image.png'],
      },
    }
  }

  // const previousOGImages = (await parent).openGraph?.images || []
  const previousTwitterImages = (await parent).twitter?.images || []
  const title = `${build.name} by ${build.createdByDisplayName}`
  const description =
    build.description ??
    'A build for Remnant 2, generated by remnant2toolkit.com'

  return {
    title,
    description,
    openGraph: {
      title,
      description: description,
      siteName: 'Remnant 2 Toolkit',
      url: `https://remnant2builder.com/builder/${build.id}`,
      images: ['https://d2sqltdcj8czo5.cloudfront.net/og_image_small.png'],
      type: 'website',
    },
    twitter: {
      title,
      description,
      images: [
        'https://d2sqltdcj8czo5.cloudfront.net/og_image.png',
        ...previousTwitterImages,
      ],
    },
  }
}

export default async function Layout({
  params: { buildId },
}: {
  params: { buildId: string }
}) {
  const buildData = await getBuild(buildId)
  if (isErrorResponse(buildData)) {
    console.error(buildData.errors)
    throw new Error(`Build ${buildId} is not found. If you are sure the build exists, it may
    be marked private. You must be logged in as the build creator to view
    a private build.`)
  }
  const { build } = buildData

  return <BuildPage params={{ build }} />
}
