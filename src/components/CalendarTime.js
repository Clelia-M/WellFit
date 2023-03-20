import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarTime() {
  const [date, setDate] = useState();
  const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      name="dateTime"
      value={value}
      className="example-custom-input"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
      id="dateInput"
    ></input>
  ));

  return (
    <DatePicker
      showTimeInput
      dateFormat="MM/dd/yyyy h:mmaa"
      selected={date}
      onChange={date => setDate(date)}
      customInput={<ExampleCustomInput />}
      dayClassName={() => "example-datepicker-day-class"}
      popperClassName="example-datepicker-class"
      todayButton="TODAY"
    />
  );
};

export default CalendarTime;