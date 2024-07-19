import React from 'react';

function Home() {
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
}

export default Home;