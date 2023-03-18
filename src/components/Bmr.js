import React, { useState } from "react";
import "fitness-calc";

function Bmr() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [burned, setBurned] = useState(0);
  const [bmrCalc, setBmrCalc] = useState("");
  const [activity, setActivity] = useState(0);

  let calculateBmr = (e) => {
    // prevent submitting
    e.preventDefault();

    if (weight === 0 || height === 0 || age === 0) {
      alert("Please enter valid weight, height and age");
    } else {
      // BMR formula for women from fitness-calc
      let bmrCalc = 50 + 2.3 * ((height - 60) / 2.54);
      setBmrCalc(bmrCalc.toFixed(2));
    }
  };
  // Harris Benedict Equation
  // BMR * 1.2
  // BMR * 1.375
  // BMR * 1.55
  // BMR * 1.725
  //   let calculateCalories = (e) => {
  //     e.preventDefault();
  // if () {

  // } else {
  //  let bmrCalc * 1.2
  //}

  //   }
  // };

  return (
    <div class="card-deck">
      <div className="col-sm-6">
        <div className="row">
          <div className="card text-center">
            <h2>Womens BMR Calculator</h2>
            <h5>
              Basal metabolic rate (BMR). Even when resting, your body burns
              calories by performing basic functions to sustain life such as:
              breathing, circulation, nutrient processing and cell production.
              Basal metabolic rate is the number of calories your body needs to
              accomplish its most basic (basal) life-sustaining functions.
            </h5>
            <form onSubmit={calculateBmr}>
              <label>
                Weight (kg)
                <input
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </label>
              <br></br>
              <label>
                Height (cm)
                <input
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </label>
              <br></br>
              <label>
                Age
                <input value={age} onChange={(e) => setAge(e.target.value)} />
              </label>
              <br></br>
              <button
                className="btn btn-secondary btn-lg btn-block"
                type="submit"
              >
                Calculate BMR
              </button>
            </form>
            <div className="center">
              <h5>Your BMR is: {bmrCalc} </h5>
            </div>
            <div className="input-wrap">
              <label className="label">Workout in a week</label>
              <select className="activity" value={activity}>
                <option value={activity}>Select your Activity</option>
                <option value={activity}>Very little or no exercise</option>
                <option value={activity}>Light exercise 1-3 times/week</option>
                <option value={activity}>Moderate exercise 3-5 times/week</option>
                <option value={activity}>
                  Intense exercise 6-7 times/week
                </option>
                <option value={activity}>
                  Very intense exercise daily and physical work
                </option>
              </select>
              <br></br>
              <button
                className="btn btn-secondary btn-lg btn-block"
                type="submit"
              >
                Calculate Calories
              </button>
              <br></br>
              <div className="center">
                <h5>Total energy expenditure: {burned} </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bmr;
