import React, { useState } from "react";
import "fitness-calc";

function Bmr() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [burned, setBurned] = useState(0);
  const [calories, setCalories] = useState("");
  const [activity, setActivity] = useState(0);

  let calculateBmr = (e) => {
    // prevent submitting
    e.preventDefault();

    if (weight === 0 || height === 0 || age === 0) {
      alert("Please enter valid weight, height and age");
    } else {
      // BMR formula for women
      let calories = 50 + 2.3 * ((height - 60) / 2.54);
      setCalories(calories.toFixed(2));
    }
  };

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
              <h5>Your BMR is: {calories} </h5>
            </div>
            <div className="input-wrap">
              <label className="label">Workout in a week</label>
              <select className="activity" value={activity}>
                <option value="">Select your Activity</option>
                <option value="">Very little or no exercise</option>
                <option value="">Exercise 1-3 times/week</option>
                <option value="">Exercise 4-5 times/week</option>
                <option value="">
                  Daily exercise or intense exercise 3-4 times/week
                </option>
                <option value="">Intense exercise 6-7 times/week</option>
                <option value="">
                  Very intense exercise daily, or physical{" "}
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
                <h5>Calories burned: {burned} </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bmr;
