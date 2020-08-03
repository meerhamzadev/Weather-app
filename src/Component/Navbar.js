import React from 'react'
import src from './logo.png'
const Navbar = () => (
    <React.Fragment>
        <div className="navbar">
            <img src={src} alt="something went wrong" className="logo-img" />
            <h1 className="app-name">Weather informer</h1>
        </div>
    </React.Fragment>
);

export default Navbar;