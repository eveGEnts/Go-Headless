import React from 'react';
//import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-white" style={{padding: '5px', borderTop: '1px solid #DFDFDF'}}>
            <div className="container-fluid">
                <div className="row">

                    {/* Company name aligned to the left */}
                    <div className="col-md-4 d-flex align-items-center justify-content-start">
                        <span className="text-primary fw-bold mb-0">eveGEnts</span>&nbsp;
                        <span className="text-muted fw-bold mb-0">Version 0.0.1</span>
                    </div>

                    {/* Navigation options aligned to the right */}
                    <div className="col-md-8">
                        <ul className="nav justify-content-end">
                            <li className="nav-item"><a href="#" className="nav-link text-muted">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;