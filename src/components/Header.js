import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/EA-Logo.png'
import '../styles/Header.css';


function Header() {
  return (
    <>
     <Navbar  bg="dark" variant="dark">
        <Container className="App-header">
          <Navbar.Brand class="justify-content-center" href="/">
            <img alt="logo" src= {logo} className="d-inline-block App-logo"/>{''}
          </Navbar.Brand>
          <h2> Emilio Acosta</h2>
          <Nav >
            <Nav.Item>
              <Nav.Link class='active' href="/aboutMe">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/projects">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/EmilioAcostaG" target="_blank">Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/aboutMe">Contact Me</Nav.Link>
            </Nav.Item>
          </Nav>


        
          {/* <Navbar.Text class='text-light'>Emilio Acosta</Navbar.Text> */}
         
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" class="nav nav-tabs" /> */}
          {/* <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#home">About Me</NavDropdown.Item>
                <NavDropdown.Item href="#link">Portfolio</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Resume</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/EmilioAcostaG" target="_blank">Contact Me</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar></>
  );
}

export default Header;