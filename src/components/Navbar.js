import React from "react";
import {
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Col,
} from "react-bootstrap";
import logo from "../images/logo.jpg";

const NavigationBar = ({ openModal }) => {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        {" "}
        <img
          src={logo}
          width="auto"
          height="50px"
          classNameName="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav classNameName="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" classNameName="mr-sm-2" />
      </Form>
      <Nav.Link onClick={() => openModal(true)}>
        Create a Account. It's free!
      </Nav.Link>
    </Navbar>
  );
};

export default NavigationBar;
