import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import history from '../store/history'

import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import LogoutButton from '../components/LogoutButton'


export default function Pages() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/">
            <h1>My Home Page</h1>
            <LogoutButton/>
          </Route>
          {/* <Route path="/signup" component={SignUpPage} />
                <Route exact path="/" component={HomePage} /> */}
        </Switch>
      </Router>
    );
}