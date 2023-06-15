import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";

function Header(props) {
  return (
    /*<div className="menu-wrapper">
      <div className="menu-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Works</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
        </ul>
      </div>
    </div>*/
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Our Works</Nav.Link>
            <Nav.Link href="#link">News & Events</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
