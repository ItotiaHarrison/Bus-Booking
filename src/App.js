import './App.css';
import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Hire from './components/Hire';
import Support from './components/Support';
import Footer from './components/Footer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  

  return (
    <div className="App">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route exact path="/hire">
          <Hire setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/support">
          <Support setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route exact path="/signup">
          <Signup setIsLoggedIn={setIsLoggedIn}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
