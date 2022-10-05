import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Hire from './components/Hire';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/hire">
          <Hire />
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
      <Footer />
    </div>
  );
}

export default App;
