import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './MyDatePicker.scss';

const MyDatePicker = ({ checkboxId, datePickerId, onDateChange }) => {

    let currentDate = new Date();
    const [startDate, setStartDate] = useState(null); // Start with null as the default date
    const [isChecked, setIsChecked] = useState(true); // Checkbox is initially unchecked

    // Handle checkbox changes
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        //if (event.target.checked) {
        //    setStartDate(null); // Set date to null when checkbox is checked
        //    onDateChange(null); // Pass null to the parent component
        //}

        //else {
        //    setStartDate(currentDate);
        //    onDateChange(currentDate);
        //}

        setStartDate(event.target.checked ? null : currentDate);
        onDateChange(event.target.checked ? null : currentDate);
    };

    // Handle date changes
    const handleDateChange = (date) => {
        setStartDate(date);
        onDateChange(date); // Pass the new date to the parent component
    };

    return (
        <div className="input-group">
            <div className="checkbox-container">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id={checkboxId}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor={checkboxId} className='mb-1'>&nbsp;Any Date</label>
            </div>

            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                id={datePickerId}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabled={isChecked}
                placeholderText={isChecked ? 'Date picker disabled' : 'Select a date'}
            />
        </div>
    );
};

export default MyDatePicker;
