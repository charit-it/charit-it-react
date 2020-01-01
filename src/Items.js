import React from "react";

class Items extends React.Component{
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
            <button type="button" className="btn btn-success">Shop Info</button>
        </div>    
      </div>
    );
  }
}

export default Items;