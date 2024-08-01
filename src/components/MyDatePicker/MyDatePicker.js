import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './MyDatePicker.scss';

const MyDatePicker = ({ checkboxId, datePickerId, selectedDate, onDateChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="input-group">
            <div className="input-group-text">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id={checkboxId}
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />
            </div>
            <DatePicker
                selected={selectedDate}
                onChange={onDateChange}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                id={datePickerId}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabled={!isChecked}
            />
        </div>
    );
};

export default MyDatePicker;