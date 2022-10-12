import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';


const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "30px 100px",
    background: "grey",
    textDecoration: "none",
    color: "white",
};

function NavBar({setIsLoggedIn}) {
    const history = useHistory();

    function handleLogout() {
        setIsLoggedIn(false);
        history.push("/login");
      }

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
            <button onClick={handleLogout}>Logout</button>

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