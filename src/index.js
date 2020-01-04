import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './User';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/user" component={User} />
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

