import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import history from '../store/history'

import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import HomePage from './HomePage'
import MapPage from './MapPage'
import MissingAll from './MissingAllPage'
import LogoutPage from './LogoutPage';



export default function Pages() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/logout" component={LogoutPage} />
          <Route path="/missing" component={MissingAll} />
          <Route path="/map" component={MapPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={HomePage}/>
        </Switch>
      </Router>
    );
}