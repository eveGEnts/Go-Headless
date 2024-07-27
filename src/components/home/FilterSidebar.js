import { React, useState, useEffect } from 'react';

function FilterSidebar() {

    const [count, setCount] = useState(0);

    //useEffect(() => {
    //    alert(`${count}`);
    //})

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 p-3 bg-white" style={{ height: '100%' }}>
            <h4 className='fw-bold'>Find Events</h4>
            <form>
                <div className="mb-3">
                    <label htmlFor="searchEvent" className="form-label">Search Events</label>
                    <input type="text" className="form-control" id="searchEvent" placeholder="Enter event name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="filterType" className="form-label">Event Type</label>
                    <select className="form-select" id="filterType">
                        <option selected>Choose...</option>
                        <option value="1">Conference</option>
                        <option value="2">Seminar</option>
                        <option value="3">Concert</option>
                    </select>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={() => setCount(count + 1)}>Apply Filters {count}</button>
            </form>
        </div>
    );
}

export default FilterSidebar;
