import React from 'react';
import * as RB from 'react-bootstrap';
import Items from './Items.js';
import Logo from './images/logo.png';
import axios from "axios";
import Login from './Login.js';
import "./App.css";

class App extends React.Component {
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
  // addItem = (item) =>{
  //   const newItem = {
  //     userId: 1,
  //     itemURL: item.image_url,
  //     itemType: item.itemtype,
  //     itemName: item.item_name,
  //     itemDesc: item.item_description,
  //     itemPri: item.item_price
  //   }
  //   axios.post('https://j6vkylfab7.execute-api.eu-west-2.amazonaws.com/dev/item', newItem).then((res) => {
  //     newItem.itemId = res.data.insertId;

  //   })
  // }
  // deleteItem = id => {
  //   const url = "https://j6vkylfab7.execute-api.eu-west-2.amazonaws.com/dev/item";
  //   axios.delete(`${url}/${id}`).then((res) => {
  //     const filterItem = this.state.item.filter(item => {
  //       return item.itemId !== id;
  //     });
  //     this.setState({
  //       item: filterItem
  //     });
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // } 



  render () {
    const children = this.state.item.filter(i => i.itemType === 'Children');
    const electronics = this.state.item.filter(i => i.itemType === 'Electronics');
    const men = this.state.item.filter(i => i.itemType === "Men");
    const women = this.state.item.filter(i => i.itemType === "Women");
    return (
      <section>
        <RB.Navbar fixed="top" bg="white" expand="lg">
          <RB.Navbar.Brand href="index.html">
            <img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top" />
            {' '}
            <b>Charit-</b><b id="title">It</b>
          </RB.Navbar.Brand>
          <RB.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <RB.Navbar.Collapse id="basic-navbar-nav">
            <RB.Nav className="mr-auto">
              <RB.Nav.Link href="index.html">Home</RB.Nav.Link>
              <RB.NavDropdown title="Clothing and Accessories" id="basic-nav-dropdown">
                <RB.NavDropdown.Item href="#children">Children</RB.NavDropdown.Item>
                <RB.NavDropdown.Item href="#men">Men</RB.NavDropdown.Item>
                <RB.NavDropdown.Item href="#women">Women</RB.NavDropdown.Item>
              </RB.NavDropdown>
              <RB.Nav.Link href="#electronics">Tech and Home</RB.Nav.Link>
              <RB.Nav.Link href="#login">About us</RB.Nav.Link>
              <Login />
            </RB.Nav>
            <RB.Form inline>
              <RB.FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <RB.Button variant="outline-success">Search</RB.Button>
            </RB.Form>
          </RB.Navbar.Collapse>
        </RB.Navbar>
        <div className ="container">
          <div>
            <h2 className="title-row">Clothing and Accessories</h2>
            <h4 className="title-row title-sub" id="children">Children</h4>
            <div className ="cards-row">
                {children.map(itemC => {
                  return <Items key={itemC.itemId} itemUrl={itemC.image_URL} itemName={itemC.item_name} itemDesc={itemC.item_description} itemPri={itemC.item_price} id={itemC.itemId} />
                })}
            </div>
          </div>
          <div>
            <h4 className="title-row title-sub" id="men">Men</h4>
            <div className ="row cards-row">
                {men.map(itemM => {
                  return <Items key={itemM.itemId} itemUrl={itemM.image_URL} itemName={itemM.item_name} itemDesc={itemM.item_description} itemPri={itemM.item_price} id={itemM.itemId} />
                })}
            </div>
          </div>
          <div>
            <h4 className="title-row title-sub" id="women">Women</h4> 
            <div className ="row cards-row">
                {women.map(itemW => {
                  return <Items key={itemW.itemId} itemUrl={itemW.image_URL} itemName={itemW.item_name} itemDesc={itemW.item_description} itemPri={itemW.item_price} id={itemW.itemId} />
                })}
            </div> 
          </div>
          <div>
            <h2 className="title-row" id="electronics">Electronics</h2>
            <div className ="row cards-row">
                {electronics.map(itemE => {
                  return <Items key={itemE.itemId} itemUrl={itemE.image_URL} itemName={itemE.item_name} itemDesc={itemE.item_description} itemPri={itemE.item_price} id={itemE.itemId} />
                })}
            </div> 
          </div>  
        </div>
        {console.log(electronics)}
      </section>
    );
  }
}

export default App;
