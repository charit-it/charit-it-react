import React from "react";
import * as RB from 'react-bootstrap';
import Logo from "./images/logo.png";
import axios from "axios";
import UserItems from "./UserItems";
import "./App.css";

class User extends React.Component {
  state = {
    item: []
  }
  componentDidMount() {
    axios.get('https://j6vkylfab7.execute-api.eu-west-2.amazonaws.com/dev/item')
      .then((res) => {
        this.setState({
          item: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      }) 
  }
  deleteItem = id => {
    const url = "https://j6vkylfab7.execute-api.eu-west-2.amazonaws.com/dev/item";
    axios.delete(`${url}/${id}`).then((res) => {
      const filterItem = this.state.item.filter(item => {
        return item.itemId !== id;
      });
      this.setState({
        item: filterItem
      });
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    const userItems = this.state.item.filter(i => i.userId === 1);
    return (
      <div>
        <header>
          <RB.Navbar fixed="top" bg="white" expand="lg">
            <RB.Navbar.Brand href="/" onClick={() => window.close()}>
              <img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top" />
              {' '}
              <b>Charit-</b><b id="title">It</b>
            </RB.Navbar.Brand>
            <RB.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <RB.Navbar.Collapse id="basic-navbar-nav">
              <RB.Nav className="mr-auto">
                <RB.Nav.Link href="/" onClick={() => window.close()}>Home / Logout</RB.Nav.Link>
              </RB.Nav>
            </RB.Navbar.Collapse>
          </RB.Navbar>
        </header>
        <div className="container container-user">
          <div className="row row-user">
            <div className="col-md-5">
              <div className="div-user-row">
                <RB.Form className="form-user">
                  <h4 className="label-user-title"><b>New Item</b></h4>
                  <RB.Form.Group>
                  <RB.Form.Label><b>Item Name</b></RB.Form.Label>
                    <RB.Form.Control placeholder="Ex. White t-shirt" required />
                  </RB.Form.Group>
                  <RB.Form.Group>
                    <RB.Form.Label><b>Imagem</b></RB.Form.Label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <button class="btn btn-outline-success" type="button" id="button-addon1">Upload</button>
                      </div>
                      <input type="text" class="form-control" placeholder="Image URL" aria-label="Example text with button addon" aria-describedby="button-addon1" />
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
                      <RB.Form.Control as="textarea" placeholder="Ex. Brand, Size and Condition" rows="3" required />
                    </RB.Form.Group>
                  </RB.Form.Group>
                  <RB.Form.Label><b>Price</b></RB.Form.Label>
                  <RB.InputGroup>
                    <RB.InputGroup.Prepend>
                      <RB.InputGroup.Text id="inputGroupPrepend">£</RB.InputGroup.Text>
                    </RB.InputGroup.Prepend>
                    <RB.Form.Control type="text" placeholder="Ex. 3.50" required />
                  </RB.InputGroup>
                  <RB.Button className="btn-form btn-success" variant="primary" type="submit">
                    Submit
                    </RB.Button>
                </RB.Form>
              </div>
            </div>
            <div className="col-md-7">
              <div className="div-user-row">
                <div className=" form-user">
                  <h4 className="label-user-title"><b>My Items</b></h4>
                  <div>
                    {userItems.map(item => {
                      return <UserItems key={item.itemId} itemName={item.item_name} itemType={item.itemType} itemDesc={item.item_description} itemPrice={item.item_price} id={item.itemId} deleteItemFunc={this.deleteItem} />
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;