import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import About from './About';
import Support from './Support';

function NavBar() {
    return (
        <div>
            <NavLink
            to="/"
            exact
            >
                Home
            </NavLink>

            <NavLink
            to="/login"
            exact
            >
                Login
            </NavLink>

            <NavLink
            to="/about"
            exact
            >
                About
            </NavLink>

            <NavLink
            to="/support"
            exact
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