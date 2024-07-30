import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './MyDatePicker.scss';

const MyDatePicker = ({ checkboxId, datePickerId, label }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [isChecked, setIsChecked] = useState(false);

    // Handle checkbox change to toggle enabled state
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="input-group">
                <div className="input-group-text">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={checkboxId}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                id={datePickerId}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabled={!isChecked} // Invert the logic here
            />
        </div>
    );
};

export default MyDatePicker;
