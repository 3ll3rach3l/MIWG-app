import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import history from '../store/history'

import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import HomePage from './HomePage'
import MapPage from './MapPage'


export default function Pages() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/map" component={MapPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={HomePage}/>
        </Switch>
      </Router>
    );
}