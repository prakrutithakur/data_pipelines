import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { isMobileOnly } from 'react-device-detect';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';
import { DatePickerWrap } from './DatePickerElements';
import { useEffect } from 'react';

const DateTimePickerField = ({ onChange, placeholder, name, timeselected, value }) => {
  const [startDate, setStartDate] = useState(null);
  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };
  const currentDate = new Date();

  useEffect(() => {
    if (!timeselected) {
      setStartDate(null);
    }
  }, [timeselected]);

  return (
    <DatePickerWrap>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        dateFormat="MMMM d, yyyy"
        dropDownMode="select"
        withPortal={isMobileOnly}
        placeholderText={placeholder}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        maxDate={name === 'start_time' ? (timeselected ? timeselected : currentDate) : currentDate}
        minDate={name === 'end_time' ? (timeselected ? timeselected : null) : null}
        value={value}
      />
    </DatePickerWrap>
  );
};

DateTimePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default renderComponentField(DateTimePickerField);
