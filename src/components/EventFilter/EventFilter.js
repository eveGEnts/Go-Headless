import { React, useState } from 'react';
import { format } from 'date-fns';

import Select from 'react-select';

import colorStylesMultiple from '../ColorStyle/ColorStylesMultiple';
import MyDatePicker from '../MyDatePicker/MyDatePicker';

import organizationOptions from '../../services/organizationData';

const EventFilter = () => {

    const [searchValue, setSearchValue] = useState('');
    const [organizationValue, setOrganizationValue] = useState([]);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [locationValue, setLocationValue] = useState('');

    // Handle change for text input
    //const handleSearchChange = (event) => {
    //    setSearchValue(event.target.value);
    //};

    // Handle change for Select input
    //const handleOrganizationChange = (selectedOptions) => {
    //    setOrganizationValue(selectedOptions);
    //};

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 p-3 bg-white" style={{ height: '100%' }}>
            <h4 className='fw-bold'>Find Events</h4>
            <div>

                {/* Search Events */}
                <div className="mb-3">
                    <label htmlFor="eventSearch" className="form-label fw-bold">Search</label>
                    <input
                        type="text"
                        id="eventSearch"
                        className="form-control"                       
                        placeholder="Event name"
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                    />
                </div>

                {/* Filter By Organization */}
                <div className="mb-3">
                    <label htmlFor="eventOrganization" className="form-label fw-bold">Organization</label>
                    <Select 
                        id="eventOrganization" 
                        placeholder="Leave blank to select all"
                        options={organizationOptions} 
                        styles={colorStylesMultiple} 
                        isMulti 
                        value={organizationValue}
                        onChange={(options) => setOrganizationValue(options)} 
                    />
                </div>

                {/* Start Date */}
                <div className="mb-3">
                    <label htmlFor="eventStartDate" className="form-label fw-bold">Start Date</label>
                    <MyDatePicker
                        checkboxId="eventStartDateCheckbox"
                        datePickerId="eventStartDate"
                        //selectedDate={startDate}                   // Passing selected date as prop
                        onDateChange={(date) => setStartDate(date)} // Handling date change
                    />
                </div>

                {/* End Date */}
                <div className="mb-3">
                    <label htmlFor="eventEndDate" className="form-label fw-bold">End Date</label>
                    <MyDatePicker
                        checkboxId="eventEndDateCheckbox"
                        datePickerId="eventEndDate"
                        //selectedDate={endDate}                    // Passing selected date as prop
                        onDateChange={(date) => setEndDate(date)} // Handling date change
                    />
                </div>

                {/* Filter By Location */}
                <div className="mb-3">
                    <label htmlFor="eventLocation" className="form-label fw-bold">Location</label>
                    <input
                        type="text"
                        id="eventLocation"
                        className="form-control"                       
                        placeholder="Event location"
                        value={locationValue}
                        onChange={(event) => setLocationValue(event.target.value)}
                    />
                </div>
            </div>
            <div className="mt-3">
                <h4 className='fw-bold'>Current Input Values:</h4>
                <p><strong>Search Value:</strong> {searchValue}</p>
                <p><strong>Selected Organizations:</strong> {organizationValue.map(option => option.label).join(', ')}</p>
                <p><strong>Start Date:</strong> {startDate == null ? 'N/A' : format(startDate, 'yyyy-MM-dd')}</p>
                <p><strong>End Date:</strong> {endDate == null ? 'N/A' : format(endDate, 'yyyy-MM-dd')}</p>
                <p><strong>Location Value:</strong> {locationValue}</p>
            </div>
        </div>
    );
};

export default EventFilter;