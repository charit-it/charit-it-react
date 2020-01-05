import React from "react";
import * as RB from 'react-bootstrap';
import Popup from 'reactjs-popup';

class Login extends React.Component {
    render() {
    return (
      <Popup trigger={<RB.Button variant="outline-success"> Volunteer space </RB.Button>} modal closeOnDocumentClick >
        <div className="row row-login popup">
          <div className="col-md-6">
            <h5>Sign up</h5>
            <form>
              <div className="form-group">
                <label>Shop email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <label>Shop name</label>
                <input type="text" className="form-control" placeholder="Shop name" />
              </div>
              <div className="form-group">
                <label>Shop address</label>
                <input type="text" className="form-control" placeholder="Shop address and postcode" />
              </div>
              <div className="form-group">
                <label>Shop phone</label>
                <input type="text" className="form-control" placeholder="Phone number" />
                <small className="form-text text-muted">We'll only share the shop's address and phone number with your customers.</small>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label">I confirm that the information given in this form is true, complete and accurate.</label>
              </div>
              <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
          </div>
          <div className="col-md-6">
            <h5>Sign in</h5>
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div>
              </div>
              <a style={{display: "table-cell"}} href="/User" target="_blank" className="btn btn-primary">Sign in</a>
            </form>
          </div>
        </div>
      </Popup>
    );
  }
}

export default Login;