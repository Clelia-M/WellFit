import React, { useState } from "react";

function Bmi() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [bmi, setBmi] = useState("");

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

  // HTML structure
  return (
    <div className="card-deck" id="bmi">
      <div>
        <div className="row">
          <div className="card text-center">
            <h2 className="title">BMI Calculator</h2>
            <h5>What is BMI?</h5>
            <p>
              Body mass index (BMI) is a person's weight in kilograms divided by
              the square of height in meters. BMI is an inexpensive and easy
              screening method for weight category: underweight, healthy weight,
              overweight, and obesity.
            </p>
            <form onSubmit={calculateBmi}>
            <div className="form-row">
                <div className="form-group">
              <label>
                Weight (lbs)
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </label>
              </div>
              <div className="form-group">
              <label>
                Height (inches)
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </label>
              </div>
              <div className="form-group">
              <label>
                Age
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)} />
              </label>
              </div>
                <br />
              </div>
              <div className="form-group">
              <button
                className="btn btn-trackers"
                type="submit"
              >
                Calculate BMI
              </button>
              </div>
            </form>
            <div className="center">
              <h5>Your BMI is: {bmi}</h5>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bmi;
