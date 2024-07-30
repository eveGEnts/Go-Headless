import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './MyDatePicker.scss';

const MyDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
                className="form-control w-100"
                id="datePicker"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"      
            />
        </div>
    );
};

export default MyDatePicker;