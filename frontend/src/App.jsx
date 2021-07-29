import React from 'react';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Switch } from 'react-router-dom';

import NavBar from "./components/NavBar/navBar_container"
import HomePage from "./components/homePage";
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
      <NavBar/>
     <Switch>
        <AuthRoute path="/" component={HomePage}/>
    {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
  </div>
);

export default App;
