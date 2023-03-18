import React, { useState } from "react";
import "fitness-calc";

function Bmr() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [female, setFemale] = useState(0);
  const [burned, setBurned] = useState(0);
  const [calories, setCalories] = useState("");

  let calculateBmr = (e) => {
    // prevent submitting
    e.preventDefault();

    if (weight === 0 || height === 0 || age === 0) {
      alert("Please enter valid weight, height and age");
    } else {
      // BMR formula
      let calories = 50 + 2.3 * ((height - 60) / 2.54);
      setCalories(calories.toFixed(2));
    }
  };

  // allows user to reload
  let reload = () => {
    window.location.reload();
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
                Submit
              </button>
              <br></br>
              <button
                className="btn btn-secondary btn-lg btn-block"
                onClick={reload}
                type="submit"
              >
                Reset
              </button>
            </form>
            <br></br>
            <div className="center">
              <h5>Calories burned today: {burned} </h5>
            </div>
            <br></br>
            <div className="center">
              <h5>Your BMR is: {calories} </h5>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bmr;
