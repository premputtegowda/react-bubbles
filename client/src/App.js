import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/BubblePage';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <nav>
      <Link to="/">Login</Link>/
        <Link to="/bubble-page">Bubble Page</Link>
        {/* <Link to="/"><span onClick={()=>localStorage.removeItem('token')}>Logout</span></Link> */}
        
      </nav>
        
        
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        
        <Switch>
        {/* <PrivateRoute path="/friends/:id" component= {Friend} /> */}
          <PrivateRoute path="/bubble-page" component={BubblePage}/>
          <Route path="/" component={Login}/>
      </Switch>
       
      </div>
    </Router>
  );
}

export default App;
