import React from "react";
import * as RB from 'react-bootstrap';
import Popup from 'reactjs-popup';

class Items extends React.Component {
  render() {
    return (
      <div className="card card-box">
        <img src={this.props.itemUrl} className="card-img-top img-he" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.itemName}</h5>
          <p className="card-text">
            {this.props.itemDesc}<br />
            <b>Price:</b> £{this.props.itemPri}
          </p>
          <Popup trigger={<RB.Button variant="success"> More Info </RB.Button>} modal closeOnDocumentClick >
            <div>
              <h2 className="title-info">More information</h2>
              <div className="row">
                <div className="col-md-6 div-info">
                  <img src={this.props.itemUrl} className="card-img-top img-inf" alt="..." />
                </div>
                <div className="col-md-6">
                  <RB.ListGroup>
                    <RB.ListGroup.Item><b>Name: </b>{this.props.itemName}</RB.ListGroup.Item>
                    <RB.ListGroup.Item><b>Description: </b>{this.props.itemDesc}</RB.ListGroup.Item>
                    <RB.ListGroup.Item><b>Price: </b>£{this.props.itemPri}</RB.ListGroup.Item>
                    <RB.ListGroup.Item><b>Shop Name: </b>{this.props.shopName}</RB.ListGroup.Item>
                    <RB.ListGroup.Item><b>Address: </b>{this.props.shopAdr}</RB.ListGroup.Item>
                    <RB.ListGroup.Item><b>Phone: </b>{this.props.shopPho}</RB.ListGroup.Item>
                    <RB.ListGroup.Item><b>E-mail: </b>{this.props.shopEm}</RB.ListGroup.Item>
                  </RB.ListGroup>
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    );
  }
}

export default Items;