import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/Bubbles';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Route exact path="/bubble-page" component={BubblePage} />
        <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
