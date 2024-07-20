import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {

    /*
    return (
        <div>
            <div>
            <button type="button" className="btn btn-outline-primary">Primary</button>
            <button type="button" className="btn btn-outline-success">Success</button>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                     Default checkbox
                </label>
            </div>

            <div>
                <label for="customRange1" class="form-label">Example range</label>
                <input type="range" class="form-range" id="customRange1" />
            </div>
        </div>
      );
      */

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

export default Home;