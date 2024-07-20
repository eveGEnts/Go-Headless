import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-white no-padding fixed-top" style={{ padding:'0px'}}>
            <div className="container-fluid">

                {/* Site Logo */}
                <a className="navbar-brand" href="#">My Site</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        {/* Homepage link */}
                        <li className="nav-item font-weight-bold">
                            <Link className="nav-link navbar-border active" aria-current="page" to="/home.html">Home</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link navbar-border" href="#">Features</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;