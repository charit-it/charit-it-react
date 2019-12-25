import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div class="nav">
        <img class="logo" ref="images/logo.jpg" alt="charit-it logo" />
        <ul>
          <li class="=" active><a href="#"><i class="fa fa-home" aria-hidden="true"></i>Home</a></li>
          <li><a href="#"><i class="fa fa-laptop"></i>Eletronics</a></li>
          <li><a href="#"><i class="fa fa-child"></i> Children</a></li>
          <li><a href="#"><i class="fa fa-male" ></i>Male</a></li>
          <li><a href="#"><i class="fa fa-female"></i>Women</a></li>
          <li><a href="#"><i class="fa fa-phone" ></i>About-us</a></li>
          <li><a href="#"><i class="fa fa-sign-in" ></i>Sign-up/log-in</a></li>
        </ul>
        <form >
          <input class="form" type="text" placeholder="search" />
          <button class="search"><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
      </div>
    );
  }
}

export default Nav;