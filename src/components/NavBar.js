import React from 'react';
import Home from './Home';
import Login from './Login';
import About from './About';
import Support from './Support';

function NavBar() {
    return (
        <div>
            <Home />
            <Login />
            <About />
            <Support />
        </div>
    )
}

export default NavBar;