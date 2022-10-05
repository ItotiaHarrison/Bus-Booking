import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import About from './About';
import Support from './Support';

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "30px 100px",
    background: "grey",
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
                    background: "black",
                }}
            >
                <Route exact path="/">
                    <Home />
                </Route>
            </NavLink>

            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                <Route exact path="/login">
                    <Login />
                </Route>
            </NavLink>

            <NavLink
                to="/about"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                <Route exact path="/about">
                    <About />
                </Route>
            </NavLink>

            <NavLink
                to="/support"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                <Route exact path="/support">
                    <Support />
                </Route>
            </NavLink>

        </div>
    )
}

export default NavBar;