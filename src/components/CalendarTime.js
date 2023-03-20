import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CalendarTime() {
  const [date, setDate] = useState(new Date());
  return (
    <DatePicker
      showTimeInput
      dateFormat="MM/dd/yyyy h:mmaa"
      selected={date}
      onChange={date => setDate(date)}
    />
  );
};

export default CalendarTime;