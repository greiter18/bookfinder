import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./components/homePage";

const App = () => (
  <div>
    <Route path="/" component={HomePage}/>
  </div>
);

export default App;
