import React from 'react';
import { Link } from 'react-router-dom';
import '../../custom.scss';
import institution_logo from '../../assets/test_uni_logo.png';
import './Navbar.scss';

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
                <a className="navbar-brand" href="#">My Site</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item font-weight-bold">
                            <Link className="nav-link navbar-border active" aria-current="page" to="/home">Home</Link>
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

// Export both components
export { SuperHeader, Navbar };
