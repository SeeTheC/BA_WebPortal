// @flow
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './common/globalStyle.css';
import CommonHelper from './common/utils';

import Login from "./containers/Login";
import Master from "./containers/Master";

const Helper = new CommonHelper();

const fakeAuth = {
  isAuthenticated: Helper.getLoggedInUserData(),
  authenticate(cb: Function) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb: Function) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const componentWithProps = (Component: any, props: Object) => (
  <Component {...props} fakeAuth={fakeAuth} />
);

export default function AuthExample() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={props => componentWithProps(Login, props)}
        />
        <Route
          path="/login"
          component={props => componentWithProps(Login, props)}
        />
        <PrivateRoute
          path="/dashboard"
          component={props => componentWithProps(Master, props)}
        />
      </Switch>
    </Router>
  );
}
