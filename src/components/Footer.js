import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer fixed-bottom main-footer">
            <p className="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
            </ul>
        </footer>
    );
};

export default Footer;