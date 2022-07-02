import { Button, Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/LOGO-WHITE.png"
            height="30"
            className="d-inline-block align-top"
            style={{ opacity: 0.8 }}
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav>
          <Nav.Link>Home</Nav.Link>
          {/* <Nav.Link>Gallery</Nav.Link> */}
          <Button
            onClick={() => (document.location = 'mailto:contact@katto.studio')}>
            Contact us
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
