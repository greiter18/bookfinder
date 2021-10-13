import React from 'react';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Switch, Route } from 'react-router-dom';

import NavBar from "./components/NavBar/navBar_container"
import HomePage from "./components/homepage/homePage_container";
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';
import Wishlist from './components/wishlist/wishlist_container';
import ReadBooks from './components/readbooks/readbooks_container';
import Result from './components/homepage/results_container';

const App = () => (
  <div>
     <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/result/:title" component={Result}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/wishlist/" component={Wishlist} />
        <ProtectedRoute exact path="/readbooks/" component={ReadBooks} />
        <ProtectedRoute exact path="/signup" component={SignupFormContainer} />
        <HomePage />  
      {/* will default to this page if none of the other routes match */}
      </Switch>
  </div>
);

export default App;



