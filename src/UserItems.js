import React from "react";

class UserItems extends React.Component {
  handleDelete = e => {
    this.props.deleteItemFunc(this.props.id);
  }
  render() {
    return (
        <div className="myitems-card card card-user">
          <div className="row">
          <div className="col-md-4 card-user-align">
            <img src={this.props.itemUrl} className="img-inf" alt="..."/>
          </div>
          <div className="col-md-7 card-user-align">
            <div><b>Name: </b>{this.props.itemName}</div>
            <div><b>Description: </b>{this.props.itemDesc}</div>
            <div><b>Type: </b>{this.props.itemType}</div>
            <div><b>Price: </b>£{this.props.itemPrice}</div>
            <div className="btn-del">
              <button onClick={this.handleDelete} className="btn btn-outline-success">Delete</button>
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default UserItems;