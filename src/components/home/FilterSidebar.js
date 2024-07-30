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
                    <label htmlFor="searchEvent" className="form-label">Search</label>
                    <input type="text" className="form-control" id="searchEvent" placeholder="Event name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="filterType" className="form-label">Department</label>
                    <select className="form-select" id="filterType" multiple>
                        <option value="-1" selected>All</option>
                        <option value="1">Dep 1</option>
                        <option value="2">Dep 2</option>
                        <option value="3">Dep 3</option>
                    </select>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={() => setCount(count + 1)}>Apply Filters {count}</button>
            </form>
        </div>
    );
}

export default FilterSidebar;
