import { React, useState, useEffect } from 'react';
import Select from 'react-select';

//import { primary } from '../../custom.scss'; // This is hypothetical
import colorStylesSingle from '../common/ColorStylesSingle';
import colorStylesMultiple from '../common/ColorStylesMultiple';

//const getComputedStyleValue = (property) => {
//    return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
//  };

import MyDatePicker from '../common/MyDatePicker';

const FilterSidebar = () => {
    // State variables to keep track of input values
    const [searchValue, setSearchValue] = useState('');
    const [organizationValue, setOrganizationValue] = useState([]);

    // Handle change for text input
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    // Handle change for Select input
    const handleOrganizationChange = (selectedOptions) => {
        setOrganizationValue(selectedOptions);
    };

    // Sample options for the Select component
    const organizationOptions = [
        //{ value: '-1', label: 'All Organizations', color: '#BFBFBF' },
        { value: '1', label: 'Org 1', color: '#FF0000' },
        { value: '2', label: 'Org 2', color: '#00FF00' },
        { value: '3', label: 'Org 3', color: '#0000FF' }
    ];

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 p-3 bg-white" style={{ height: '100%' }}>
            <h4 className='fw-bold'>Find Events</h4>
            <div>

                {/* Search Events */}
                <div className="mb-3">
                    <label htmlFor="eventSearch" className="form-label fw-bold">Search</label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventSearch"
                        placeholder="Event Name"
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </div>

                {/* Filter By Organization */}
                <div className="mb-3">
                    <label htmlFor="eventOrganization" className="form-label fw-bold">Organization</label>
                    <Select 
                        options={organizationOptions} 
                        onChange={handleOrganizationChange} 
                        id="eventOrganization" 
                        styles={colorStylesMultiple} 
                        placeholder="Leave blank to select all"
                        isMulti 
                        value={organizationValue}
                    />
                </div>

                {/* Start Date */}
                <div className="mb-3">
                    <label htmlFor="eventStartDate" className="form-label fw-bold">Start Date</label>
                    <MyDatePicker />
                </div>
            </div>
            <div className="mt-3">
                <h4 className='fw-bold'>Current Input Values:</h4>
                <p><strong>Search Value:</strong> {searchValue}</p>
                <p><strong>Selected Organizations:</strong> {organizationValue.map(option => option.label).join(', ')}</p>
            </div>
        </div>
    );
};

export default FilterSidebar;
