/*********************************************************************************
 * BTI425 – Assignment 3
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 *
 * https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 * Name: Leonardo de la Mora Caceres Student ID: 152877205 Date: Feb-5-2025
 *
 ********************************************************************************/

import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { Pagination, Accordion } from 'react-bootstrap'
import ListingDetails from '@/components/ListingDetails'
import PageHeader from '@/components/PageHeader'

const domain = 'https://listings-api-eight.vercel.app'

export default function Home() {
  const [page, setPage] = useState(1)
  const [pageData, setPageData] = useState([])

  const { data, error } = useSWR(
    `${domain}/api/listings?page=${page}&perPage=10`
  )

  useEffect(() => {
    if (data) {
      setPageData(data)
    }
  }, [data])

  const prev = () => {
    if (page > 1) setPage(page - 1)
  }

  const next = () => {
    setPage(page + 1)
  }

  return (
    <>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings"></PageHeader>
      <Accordion>
        {pageData.map((listing) => (
          <Accordion.Item eventKey={listing._id} key={listing._id}>
            <Accordion.Header>
              <strong>{listing.name}</strong> {listing.address.street}
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={prev} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  )
}
