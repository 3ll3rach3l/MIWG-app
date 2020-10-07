import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import history from '../store/history'

import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import TempHome from './TempHome'


export default function Pages() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={TempHome}/>
        </Switch>
      </Router>
    );
}