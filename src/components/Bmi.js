import React, { useState } from "react";
import "fitness-calc";

function Bmi() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [bmi, setBmi] = useState(0);

  let calculateBmi = (e) => {
    // prevent submitting
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height");
    } else {
      // BMI formula
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
    }
  };
  // allows user to reload
  let reload = () => {
    window.location.reload();
  };

  // HTML structure
  return (
    <div className="card">
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBmi}>
        <label>
          Weight (kg)
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Height (inches)
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Age
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br></br>
        <button className="btn" type="submit">
          Submit
        </button>
        <button className="btn btn-outline" onClick={reload} type="submit">
          Reset
        </button>
      </form>
      <br></br>
    </div>
  );
}

export default Bmi;
