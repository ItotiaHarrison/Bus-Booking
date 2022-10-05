import React from 'react';
import { NavLink } from 'react-router-dom';


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
                Home
            </NavLink>

            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                Login
            </NavLink>

            <NavLink
                to="/about"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                About
            </NavLink>

            <NavLink
                to="/support"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                Support
            </NavLink>

        </div>
    )
}

export default NavBar;