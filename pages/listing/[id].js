import useSWR from 'swr'
import { useRouter } from 'next/router'
import Error from 'next/error'
import ListingDetails from '@/components/ListingDetails'
import PageHeader from '@/components/PageHeader'
import { domain } from '@/path'

export default function Listing() {
  const router = useRouter()
  const { id } = router.query

  const { data, error, isLoading } = useSWR(`${domain}/api/listings/${id}`)

  if (isLoading) return null

  if (error) {
    return <Error statusCode={404} />
  } else {
    if (data) {
      return (
        <>
          <PageHeader text={data?.name} />
          <ListingDetails listing={data} />
        </>
      )
    } else return <Error statusCode={404} />
  }
}
