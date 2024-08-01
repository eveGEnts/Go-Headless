import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './MyDatePicker.scss';

const MyDatePicker = ({ checkboxId, datePickerId, onDateChange }) => {
    const [startDate, setStartDate] = useState(null); // Start with null as the default date
    const [isChecked, setIsChecked] = useState(false); // Checkbox is initially unchecked

    // Handle checkbox changes
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        // Set date to null if checkbox is unchecked, otherwise retain the current date or set a default
        if (!event.target.checked) {
            setStartDate(null); // Set date to null when checkbox is unchecked
            onDateChange(null); // Pass null to the parent component
        } else {
            // Set to current date or last valid date, depending on your logic
            const newDate = startDate || new Date(); // Could be a new Date() or a preserved date
            setStartDate(newDate);
            onDateChange(newDate); // Update the parent component
        }
    };

    // Handle date changes
    const handleDateChange = (date) => {
        setStartDate(date);
        onDateChange(date); // Pass the new date to the parent component
    };

    return (
        <div className="input-group">
            <div className="input-group-text">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id={checkboxId}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
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
                disabled={!isChecked}
                placeholderText='Enable checkbox to enable filter'
            />
        </div>
    );
};

export default MyDatePicker;