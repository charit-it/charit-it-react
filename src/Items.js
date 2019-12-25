import React from "react";

class Items extends React.Component{
  render() {
    return (
        <div className="card col-md-2 card-box">
          <img src="images/clothe.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Clothe X</h5>
            <p className="card-text">
              This is a wider card with supporting text below.
            </p>
            <button type="button" className="btn btn-success">See more</button>
          </div>
        </div>
    );
  }
}

export default Items;