import React from "react";
import * as RB from 'react-bootstrap';
import Logo from "./images/logo.png";
import Login from "./Login";
import AboutUs from "./About_us";

class Header extends React.Component {
  render() {
    return (
      <header>
        <RB.Navbar fixed="top" bg="white" expand="lg">
          <RB.Navbar.Brand href="/">
            <img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top" />
            {' '}
            <b>Charit-</b><b id="title">It</b>
          </RB.Navbar.Brand>
          <RB.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <RB.Navbar.Collapse id="basic-navbar-nav">
            <RB.Nav className="mr-auto">
              <RB.Nav.Link href="/">Home</RB.Nav.Link>
              <RB.NavDropdown title="Clothing and Accessories" id="basic-nav-dropdown">
                <RB.NavDropdown.Item href="#children">Children</RB.NavDropdown.Item>
                <RB.NavDropdown.Item href="#men">Men</RB.NavDropdown.Item>
                <RB.NavDropdown.Item href="#women">Women</RB.NavDropdown.Item>
              </RB.NavDropdown>
              <RB.Nav.Link href="#electronics">Tech and Home</RB.Nav.Link>
              <AboutUs />
              <Login />
            </RB.Nav>
            <RB.Form inline>
              <RB.FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <RB.Button variant="outline-success">Search</RB.Button>
            </RB.Form>
          </RB.Navbar.Collapse>
        </RB.Navbar>
      </header>
    );
  }
}

export default Header;