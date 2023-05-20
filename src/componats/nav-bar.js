import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { FaSearch, FaUsers, FaCartPlus } from "react-icons/fa";
import Logo from "../images/logo.png";
export default function navbar() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand href="#" className="pe-5">
              <img src={Logo} alt="logo" />
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
                <Nav className="justify-content-lg-center  nav flex-grow-1 pe-3">
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
                <Form className="py-2 d-flex justify-content-lg-center justify-content-md-start align-items-center">
                  <FaSearch size={22} className="pe-1" />
                  <FaUsers size={22} className="pe-1" />
                  <FaCartPlus size={22} />
                  <h5 className="d-block mb-0 ms-1">Your Bag</h5>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
