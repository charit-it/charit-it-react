import React from "react";
import "./App.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="nav">
        <footer>
          <ul>
            <li className="=" active><a href="#"><i className="fa fa-home" aria-hidden="true"></i>Home</a></li>
            <li><a href="#"><i className="fa fa-laptop"></i>Eletronics</a></li>
            <li><a href="#"><i className="fa fa-child"></i> Children</a></li>
            <li><a href="#"><i className="fa fa-male" ></i>Male</a></li>
            <li><a href="#"><i className="fa fa-female"></i>Women</a></li>
            <li><a href="#"><i className="fa fa-phone" ></i>About-us</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;