import React from "react";
import * as RB from 'react-bootstrap';
import Popup from 'reactjs-popup';

class Login extends React.Component{
  render() {
    return (
      <Popup trigger={<RB.Button variant="outline-success"> Login </RB.Button>} modal closeOnDocumentClick >
        <div className="row row-login">
        <div className="col-md-6">
          <h5>Sign Up</h5>
          <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label>Shop Name</label>
            <input type="text" className="form-control" placeholder="Shop Name" />
          </div>
          <div className="form-group">
            <label>Shop Adress</label>
            <input type="text" className="form-control" placeholder="Shop address with PostCode" />
          </div>
          <div className="form-group">
            <label>Shop Phone</label>
            <input type="text" className="form-control" placeholder="Phone" />
            <small className="form-text text-muted">We'll never share your information with anyone else.</small>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">I confirm that the information given in this form is true, complete and accurate.</label>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
        </div>
        <div classNameName="col-md-6">
        <h5>Sign In</h5>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </div>
        </div>
      </Popup>
    );
  }
}
  

export default Login;