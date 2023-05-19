import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import Logo from "../src/images/logo.png";

function App() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand href="#" className="pe-5">
              <img src={Logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center nav flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="linknav">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action2" className="linknav">
                    furniture
                  </Nav.Link>
                  <Nav.Link href="#action3" className="linknav">
                    armoires
                  </Nav.Link>
                  <Nav.Link href="#action4" className="linknav">
                    study table
                  </Nav.Link>
                  <Nav.Link href="#action5" className="linknav">
                    plastic chair
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">xx</Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default App;
