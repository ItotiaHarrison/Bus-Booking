import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import About from './About';
import Support from './Support';

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar() {
    return (
        <div>
            <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
                background: "darkblue",
              }}
            >
                Home
            </NavLink>

            <NavLink
            to="/login"
            exact
            style={linkStyles}
            activeStyle={{
                background: "darkblue",
              }}
            >
                Login
            </NavLink>

            <NavLink
            to="/about"
            exact
            style={linkStyles}
            activeStyle={{
                background: "darkblue",
              }}
            >
                About
            </NavLink>

            <NavLink
            to="/support"
            exact
            style={linkStyles}
            activeStyle={{
                background: "darkblue",
              }}
            >
                Support
            </NavLink>

            <Home />
            <Login />
            <About />
            <Support />
        </div>
    )
}

export default NavBar;