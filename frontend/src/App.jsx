import React from 'react';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Switch, Route } from 'react-router-dom';

import NavBar from "./components/NavBar/navBar_container"
import HomePage from "./components/homePage";
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';

const App = () => (
  <div>
     <NavBar/>
     <Switch>
      <AuthRoute exact path="/" component={HomePage}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <HomePage />  
    {/* will default to this page if none of the other routes match */}
    </Switch>
  </div>
);

export default App;
