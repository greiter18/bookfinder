import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import axios from 'axios';
import jwt_decode from 'jwt-decode';// We will use this to parse the user's session token
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import './stylesheets/App.scss'

document.addEventListener('DOMContentLoaded', () => {
  let store;

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken); // Set the token as a common header for all axios requests
    const decodedUser = jwt_decode(localStorage.jwtToken); // Decode the token to obtain the user's information
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };// Create a preconfigured state we can immediately add to our store
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {// If the user's token has expired
      store.dispatch(logout());// Logout the user and redirect to the login page
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});  // If this is a first time user, start with an empty store
  }
  const root = document.getElementById('root');// Render our root component and pass in the store as a prop
  window.getState = store.getState;
  window.axios = axios;

  ReactDOM.render(<Root store={store} />, root);
});
