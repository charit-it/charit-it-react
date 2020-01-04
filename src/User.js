import React from "react";
import * as RB from 'react-bootstrap';
import Logo from "./images/logo.png"
import "./App.css";

class User extends React.Component {

  render() {
    return (
      <div>
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
                <RB.Nav.Link href="/">Home / Logout</RB.Nav.Link>
              </RB.Nav>
            </RB.Navbar.Collapse>
          </RB.Navbar>
        </header>
        <div className="container container-user">
          <div className="row row-user">
            <div className="col-md-5 form-user">
              <RB.Form>
                <RB.Form.Group>
                  <RB.Form.Label><b>Item name</b></RB.Form.Label>
                  <RB.Form.Control placeholder="White t-shirt" required/>
                </RB.Form.Group>
                <RB.Form.Group>
                  <RB.Form.Label><b>Imagem</b></RB.Form.Label>
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="customFile" />
                      <label className="custom-file-label">Choose image</label>
                    </div>
                </RB.Form.Group>
                <RB.Form.Group>
                  <RB.Form.Label><b>Type</b></RB.Form.Label>
                  <RB.Form.Control as="select" required>
                    <option>Children</option>
                    <option>Men</option>
                    <option>Women</option>
                    <option>Tech and Home</option>
                  </RB.Form.Control>
                </RB.Form.Group>
                <RB.Form.Group>
                <RB.Form.Group controlId="exampleForm.ControlTextarea1">
                  <RB.Form.Label><b>Description</b></RB.Form.Label>
                    <RB.Form.Control as="textarea" rows="3" required/>
                  </RB.Form.Group>
                </RB.Form.Group>
                <RB.Form.Label><b>Price</b></RB.Form.Label>
                  <RB.InputGroup>
                    <RB.InputGroup.Prepend>
                      <RB.InputGroup.Text id="inputGroupPrepend">£</RB.InputGroup.Text>
                    </RB.InputGroup.Prepend>
                    <RB.Form.Control type="text" placeholder="3.50" required/>
                  </RB.InputGroup>
                <RB.Button className="btn-form" variant="primary" type="submit">
                  Submit
                </RB.Button>
              </RB.Form>
            </div>
            <div className="col-md-5 form-user">
            <h5>items area</h5>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;