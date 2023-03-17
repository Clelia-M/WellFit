import React from "react";
import "fitness-calc";

// HTML structure
function Bmi() {
  return (
    <div className="card">
      <h2>BMR Calculator</h2>
      <form>
        <label>
          Weight (kg)
          <input type="text" weight="weight" />
        </label>
        <br></br>
        <label>
          Height (inches)
          <input type="text" height="height" />
        </label>
        <br></br>
        <label>
          Age
          <input type="text" age="age" />
        </label>
        <br></br>
        <input type="submit" value="Calculate BMR" />
      </form>
      <br></br>
    </div>
  );
}

export default Bmi;
