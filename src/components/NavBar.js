import React from 'react';
import { NavLink } from 'react-router-dom';


const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "30px 100px",
    background: "grey",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return (
        <nav>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                HOME
            </NavLink>

            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                LOGIN
            </NavLink>

            <NavLink
                to="/about"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                HIRE
            </NavLink>

            <NavLink
                to="/support"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                SUPPORT
            </NavLink>

        </nav>
    )
}

export default NavBar;