import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              // className="App-logo"
              className="d-inline-block align-top"
            />{' '}
            Emilio Acosta
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">x
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#home">About Me</NavDropdown.Item>
                <NavDropdown.Item href="#link">Portfolio</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Resume</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/EmilioAcostaG" target="_blank">Contact Me</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></>
  );
}

export default Header;