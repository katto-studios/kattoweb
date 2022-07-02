import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
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
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/gallery')}>Gallery</Nav.Link>
          {/* <Nav.Link>Gallery</Nav.Link> */}
          <Button
            onClick={() => (document.location = 'mailto:contact@katto.studio')}>
            📭 Contact us
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
