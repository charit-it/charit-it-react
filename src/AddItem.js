import React from "react";
import axios from "axios";
import * as RB from 'react-bootstrap';

class AddItem extends React.Component {
  state = {  
    newItemName: "",
    newItemUrl: "",
    newItemPrice: "", 
    newItemDesc: "",
    newItemType: ""
  }
  updateName = (e) => {
    this.setState({
      newItemName: e.target.value
    });
  }
  updateUrl = (e) => {
    this.setState({
      newItemUrl: e.target.value
    });
  }
  updateDesc = (e) => {
    this.setState({
      newItemDesc: e.target.value
    });
  }
  updateType = (e) => {
    this.setState({
      newItemType: e.target.value
    });
  } 
  updatePrice = (e) => {
    this.setState({
      newItemPrice: e.target.value
    });
  }
  handleAddItem = e => {
    e.preventDefault();
    this.addItem(this.state.newItemName, this.state.newItemPrice, this.state.newItemUrl, this.state.newItemDesc, this.state.newItemType);
  }

  addItem = (itemName, itemPri, itemUrl, itemDesc, itemType) => {
    const newItem = {
      userId: 1,
      item_name: itemName,
      item_description: itemDesc,
      item_price: itemPri,
      image_URL: itemUrl,
      itemType: itemType
    };
    axios.post('https://j6vkylfab7.execute-api.eu-west-2.amazonaws.com/dev/item', newItem)
    .then((res) => {
      alert("Item Successfully Added");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <div>
        <RB.Form.Group>
          <RB.Form.Label><b>Item Name</b></RB.Form.Label>
          <RB.Form.Control placeholder="Ex. White t-shirt" required value={this.state.newItemName} onChange={this.updateName} />
        </RB.Form.Group>
        <RB.Form.Group>
          <RB.Form.Label><b>Image</b></RB.Form.Label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-success" type="button">Upload</button>
            </div>
            <RB.Form.Control placeholder="Ex. White t-shirt" required value={this.state.newItemUrl} onChange={this.updateUrl} />
          </div>
        </RB.Form.Group>
        <RB.Form.Group>
          <RB.Form.Label><b>Type</b></RB.Form.Label>
          <RB.Form.Control as="select" required value={this.state.newItemType} onChange={this.updateType}>
            <option>Children</option>
            <option>Men</option>
            <option>Women</option>
            <option>Electronics</option>
          </RB.Form.Control>
        </RB.Form.Group>
        <RB.Form.Group>
          <RB.Form.Group controlId="exampleForm.ControlTextarea1">
            <RB.Form.Label><b>Description</b></RB.Form.Label>
            <RB.Form.Control as="textarea" placeholder="Ex. Brand, Size and Condition" value={this.state.newItemDesc} onChange={this.updateDesc} rows="3" required />
          </RB.Form.Group>
        </RB.Form.Group>
        <RB.Form.Label><b>Price</b></RB.Form.Label>
        <RB.InputGroup>
          <RB.InputGroup.Prepend>
            <RB.InputGroup.Text id="inputGroupPrepend">£</RB.InputGroup.Text>
          </RB.InputGroup.Prepend>
          <RB.Form.Control type="text" placeholder="Ex. 3.50" required value={this.state.newItemPrice} onChange={this.updatePrice} />
        </RB.InputGroup>
        <RB.Button className="btn-form btn-success" variant="primary" onClick={this.handleAddItem}>
          Submit
        </RB.Button>
      </div>
    );
  }
}

export default AddItem;