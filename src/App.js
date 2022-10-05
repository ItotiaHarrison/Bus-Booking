import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Support from './components/Support';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
