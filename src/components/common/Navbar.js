import React from 'react';
import { Link } from 'react-router-dom';
import '../../custom.scss';
import './Navbar.scss';

import '@fortawesome/fontawesome-free/css/all.min.css'
import institution_logo from '../../assets/test_uni_logo.png';

// SuperHeader Component
const SuperHeader = () => {
    return (
        <header className="bg-white super-header">
            <div className="container-fluid" style={{ paddingTop: '5px', paddingBottom: '5px'}}>
                <div className="d-flex justify-content-between align-items-center">
                    <a href="#">
                        <img src={institution_logo} alt="Institution Logo" style={{ height: '50px' }} />
                    </a>
                    <h5 className="mb-0 fw-bold">Event Management Platform</h5>
                </div>
            </div>
        </header>
    );
};

// Navbar Component
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-white no-padding">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {/* Home */}
                        <li className="nav-item">
                            <Link className="nav-link navbar-border active" to="/">Home</Link>
                        </li>
                        
                        {/* Events */}
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/events">Events</Link>
                        </li>
                        
                        {/* Graphics */}
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/graphics">Graphics</Link>
                        </li>

                        {/* Assets */}
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/assets">Assets</Link>
                        </li>

                        {/* Admin */}
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/admin">Admin</Link>
                        </li>

                        {/* TWIG Page */}
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/twig">TWIG</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        
                        {/* User Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link navbar-border" href="#" id="navbarDropdownUserLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                User <i className="fa-solid fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownUserLink">
                                <li><Link className="dropdown-item" to="/user/profile">Profile</Link></li>
                                <li><Link className="dropdown-item" to="/user/settings">Settings</Link></li>
                                <li><Link className="dropdown-item" to="/user/logout">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Export both components
export { SuperHeader, Navbar };
