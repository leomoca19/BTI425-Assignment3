import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import ListingDetails from '@/components/ListingDetails'
import PageHeader from '@/components/PageHeader'
import { domain } from '@/path'

const url = `${domain}/api/listings/1206363`

export async function getStaticProps() {
  const data = await fetch(url).then((res) => res.json())
  return { props: { listing: data } }
}

export default function About({ listing }) {
  return (
    <>
      <PageHeader text="About the Developer - Leonardo de la Mora Caceres" />
      <Card>
        <Card.Body>
          <p>
            Hi, I am a software developer student, this is my first published
            project using react and next for web development
          </p>

          <p>
            This is the place I want you to visit: &nbsp;
            <Link href={`/listing/${listing._id}`} passHref legacyBehavior>
              <a>"{listing.name}"</a>
            </Link>
            &nbsp;(Airbnb)
          </p>
        </Card.Body>
        <ListingDetails listing={listing} />
      </Card>
    </>
  )
}
