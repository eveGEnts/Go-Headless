import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './MyDatePicker.scss';

/**
 * MyDatePicker is a React component that integrates a date picker with an optional checkbox
 * for selecting "Any Date", which disables the date picker. It provides an interactive UI
 * for users to either specify a date or indicate that the date is not fixed.
 *
 * Props:
 *  - `checkboxId` (string): The ID for the checkbox input element.
 *  - `datePickerId` (string): The ID for the date picker input element.
 *  - `onDateChange` (function): Callback function that is called when the date is changed.
 *    This function takes the new date value as its parameter, which can be `null` if
 *    the date is unset (i.e., "Any Date" is checked).
 *
 * Usage:
 * <MyDatePicker
 *   checkboxId="any-date-checkbox"
 *   datePickerId="event-date-picker"
 *   onDateChange={(date) => { console.log("Selected date:", date); }}
 * />
 *
 * Behavior:
 *  - The date picker is initially disabled until the "Any Date" checkbox is unchecked.
 *  - Checking the "Any Date" checkbox sets the date to null and disables the date picker.
 *  - Unchecking the checkbox enables the date picker and allows the user to select a date.
 *  - Changes to the date picker or the checkbox state trigger the `onDateChange` callback
 *    with the new date value or null.
 */

const MyDatePicker = ({ checkboxId, datePickerId, onDateChange }) => {

    let currentDate = new Date();
    const [startDate, setStartDate] = useState(null);
    const [isChecked, setIsChecked] = useState(true);

    // Handle checkbox changes
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);

        // Set date to null if the date picker is disabled.
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

            {/* "Any Date" checkbox: disable the date picker if checked */}
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

            {/* React date picker component */}
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