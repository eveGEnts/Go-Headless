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
          <div style={{ paddingTop: '70px', paddingBottom: '40px' }}>
            {/* Main content goes here */}
            <main className="container mt-5">
              <h1>Welcome to My Site</h1>
              {/* More content */}
            </main>
          </div>
          <Footer />
        </div>
    );
}

export default Home;