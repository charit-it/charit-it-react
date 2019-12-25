import React from 'react';
import Items from './Items.js'
import "./App.css";

class App extends React.Component {
  render () {
    return (
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTog">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="index.html"><h4><span id="title">Charit-</span>It</h4></a>
          <div className="collapse navbar-collapse" id="navbarTog">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link nav" href="."> Eletronics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav" href="."> Children</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav" href="."> Male</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav" href="."> Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav" href="."> About us</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 form-search">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="." id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sign up/in</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href=".">Sign up</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href=".">Log in</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <section>
          <div className="row item-row">
            <Items />
            <Items />
            <Items />
          </div>
          <div className="row item-row">
            <Items />
            <Items />
            <Items />
          </div>
          <div className="row item-row">
            <Items />
            <Items />
            <Items />
          </div>
        </section>
        <footer>

        </footer>
      </section>
    );
  }
}

export default App;
