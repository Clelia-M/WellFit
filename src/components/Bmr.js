import React, { useState } from "react";
import { BMR } from 'fitness-calculator';

function Bmr() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [burned, setBurned] = useState(0);
  const [bmrCalc, setBmrCalc] = useState("");
  const [activity, setActivity] = useState("");

  let calculateBmr = (e) => {
    // prevent submitting
    e.preventDefault();

    if (weight === 0 || height === 0 || age === 0) {
      alert("Please enter valid weight, height and age");
    } else {
      // BMR formula for women from fitness-calc
      let bmrCalc = BMR('female', parseInt(age), parseInt(height), parseInt(weight))
      setBmrCalc(Math.round(bmrCalc));
    }
  };

  const calculateHbe = () => {
    setBurned(Math.round(bmrCalc * parseFloat(activity)))
  }
  // Harris Benedict Equation
  // BMR * 1.2
  // BMR * 1.375
  // BMR * 1.55
  // BMR * 1.725

  // BMR for women formula
  // Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)

  return (
    <div class="card-deck">
      <div>
        <div className="row">
          <div className="card text-center">
            <h2 className="title">Womens BMR Calculator</h2>
            <h5>
              Which is your Basal metabolic rate (BMR)?</h5>
            <p>Even when resting, your body burns
              calories by performing basic functions to sustain life such as:
              breathing, circulation, nutrient processing and cell production.
              <br />
              <br />
              Basal metabolic rate is the number of calories your body needs to
              accomplish its most basic (basal) life-sustaining functions.</p>
            <form onSubmit={calculateBmr}>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    Weight (kg)
                    <input
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Height (cm)
                    <input
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Age
                    <input value={age} onChange={(e) => setAge(e.target.value)} />
                  </label>
                </div>
                <br />
              </div>
              <div className="form-group">
                <button className="btn btn-trackers" type="submit">
                  Calculate BMR
                </button>
              </div>
            </form>
            <div className="center">
              <h5>Your BMR is: {bmrCalc} calories</h5>
            </div>
            <div className="activity">
              <label className="label">Workout in a week</label>
              <select className="activity" value={activity} onChange={(e) => {
                setActivity(e.target.value)
              }}>
                <option value="">Select your Activity</option>
                <option value="1.2">Very little or no exercise</option>
                <option value="1.375">Light exercise 1-3 times/week</option>
                <option value="1.55">Moderate exercise 3-5 times/week</option>
                <option value="1.725">Intense exercise 6-7 times/week</option>
                <option value="1.9">
                  Very intense exercise daily and physical work
                </option>
              </select>
              <br></br>
              <button
                className="btn btn-trackers"
                type="submit"
                onClick={calculateHbe}
              >
                Calculate Calories
              </button>
              <br></br>
              <div className="center">
                <h5>Total energy expenditure: {burned} calories</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bmr;
