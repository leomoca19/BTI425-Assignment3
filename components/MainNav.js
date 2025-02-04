import { Container, Nav, Navbar } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Link from 'next/link'

export default function MainNav() {
  return (
    <>
      <Navbar expand="lg" className="navbar-dark bg-dark fixed-top">
        <Container>
          <Navbar.Brand>Leonardo de la Mora Caceres</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Listings</Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  )
}
