import React from 'react';
import * as RB from 'react-bootstrap';
import Items from './Items.js';
import Logo from './images/logo.png';
import "./App.css";

class App extends React.Component {
  render () {
    return (
    <section>
      <RB.Navbar bg="white" expand="lg">
        <RB.Navbar.Brand href="index.html">
          <img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top" />
          {' '}
          <b>Charit-</b><b id="title">It</b>
        </RB.Navbar.Brand>
        <RB.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <RB.Navbar.Collapse id="basic-navbar-nav">
          <RB.Nav className="mr-auto">
            <RB.Nav.Link href="index.html">Home</RB.Nav.Link>
            <RB.NavDropdown title="Clothing / Shoes" id="basic-nav-dropdown">
              <RB.NavDropdown.Item href="#action/3">Children</RB.NavDropdown.Item>
              <RB.NavDropdown.Item href="#action/3.1">Men</RB.NavDropdown.Item>
              <RB.NavDropdown.Item href="#action/3.3">Women</RB.NavDropdown.Item>
            </RB.NavDropdown>
            <RB.Nav.Link href="#link">Electronics</RB.Nav.Link>
            <RB.Nav.Link href="#link">About us</RB.Nav.Link>
            <RB.NavDropdown title="Login" id="basic-nav-dropdown">
              <RB.NavDropdown.Item href="#action/4.1">Sign up</RB.NavDropdown.Item>
              <RB.NavDropdown.Divider />
              <RB.NavDropdown.Item href="#action/4.4">Sign in</RB.NavDropdown.Item>
            </RB.NavDropdown>
          </RB.Nav>
          <RB.Form inline>
            <RB.FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <RB.Button variant="outline-success">Search</RB.Button>
          </RB.Form>
        </RB.Navbar.Collapse>
      </RB.Navbar>

    </section>
    
    );
  }
}

export default App;
