import { Container, Row, Col } from 'react-bootstrap'

export default function ListingDetails({ listing }) {
  console.log(listing.picture_url)
  return (
    <>
      <Container>
        <Row>
          <Col lg>
            <img
              onError={(event) => {
                event.target.onerror = null
                event.target.src =
                  'https://placehold.co/600x400?text=Photo+Not+Available'
              }}
              className="img-fluid w-100"
              src={listing.picture_url}
              alt="Listing Image"
            />
            <br />
            <br />
          </Col>
          <Col lg></Col>
        </Row>
      </Container>
    </>
  )
}
