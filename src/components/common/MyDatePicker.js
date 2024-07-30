import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './MyDatePicker.scss';

const MyDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>

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