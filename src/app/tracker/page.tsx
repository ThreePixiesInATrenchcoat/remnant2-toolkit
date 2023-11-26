import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('./(components)/Page'), {
  ssr: false,
})

export default function TrackerPage() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}
