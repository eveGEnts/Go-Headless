import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Organizer() {

    return (
        <div>
          <Navbar />
            
          <div className="container-fluid mt-3">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="h3">Page Title</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>
        </div>

          <Footer />
        </div>
    );
}

export default Organizer;