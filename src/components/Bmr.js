import React, { useEffect, useState } from "react";
import "fitness-calc";

function Bmr() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [female, setFemale] = useState(0);
  const [burned, setBurned] = useState(0);
  const [calories, setCalories] = useState("");

  // functions for weight, height, age, gender and calories
  function setWeightBmr(e) {
    setWeight(e.target.value);
  }
  function setHeightBmr(e) {
    setHeight(e.target.value);
  }
  function setAgeBmr(e) {
    setAge(e.target.value);
  }
  function setFemaleBmr(e) {
    setFemale(e.target.value);
  }
  function setBurnedBmr(e) { 
    setBurned(e.target.value)
  }
  function setCaloriesBmr(e) {
    setCalories(e.target.value);
  }

  useEffect(() => {
    if (height !== 0) {
      if (female) {
        // womens BMR
        setCalories((50 + 2.3 * ((height - 60) / 2.54)).toFixed(2));
      }
    }
  });

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
            <form>
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
