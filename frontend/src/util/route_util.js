import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        // Redirect to the books page if the user is authenticated
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route {...rest} render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        // Redirect to the login page if the user is not authenticated
        <Redirect to="/login" />
      )
    }
  />
);
// Use the isAuthenitcated slice of state to determine whether a user is logged in
const mapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

//with router - gives components access to special things ie history
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));