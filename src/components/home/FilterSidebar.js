import { React, useState, useEffect } from 'react';
import Select from 'react-select';

//import { primary } from '../../custom.scss'; // This is hypothetical
import colorStyles from '../common/ColorStyles';


//const getComputedStyleValue = (property) => {
//    return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
//  };



function FilterSidebar() {

    const [count, setCount] = useState(0);

    const [selectedOrganization, setOrganization] = useState(null);

    const handleChange = (option) => {
        setOrganization(option);
        alert(option);
    };

    //useEffect(() => {
    //    alert(`${count}`);
    //})

    const organizationOptions = [
        //{ value: '-1', label: 'All Organizations', color: '#BFBFBF' },
        { value: '1', label: 'Org 1', color: '#FF0000' },
        { value: '2', label: 'Org 2', color: '#00FF00' },
        { value: '3', label: 'Org 3', color: '#0000FF' }
    ];

    const departmentOptions = [
        //{ value: '-1', label: 'All Departments', color: '#BFBFBF' },
        { value: '1', label: 'Org 1', color: '#FF0000' },
        { value: '2', label: 'Org 2', color: '#00FF00' },
        { value: '3', label: 'Org 3', color: '#0000FF' }
    ];

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 p-3 bg-white" style={{ height: '100%' }}>
            <h4 className='fw-bold'>Find Events</h4>
            <form>
                <div className="mb-3">
                    <label htmlFor="eventSearch" className="form-label">Search</label>
                    <input type="text" className="form-control" id="eventSearch" placeholder="Event Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventOrganization" className="form-label">Organization</label>
                    <Select options={organizationOptions} onChange={handleChange} id="eventOrganization" styles={colorStyles} defaultValue={organizationOptions[0]} isMulti />
                </div>
                {/*
                <button type="button" className="btn btn-outline-primary" onClick={() => setCount(count + 1)}>Apply Filters {selectedOrganization.label}</button>
                */ }
            </form>
        </div>
    );
}

export default FilterSidebar;
