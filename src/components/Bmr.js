import React, { useEffect, useState } from "react";
import "fitness-calc";

function Bmr() {

  const [weight, setWeight] = useState (0);
  const[height, setHeight] = useState(0);
  const[age, setAge] = useState (0);
  const [gender, setGender] = useState (0);
  const [calories, setCalories] = useState (0);

  function setWeightBmr(e){
    setWeight(e.target.value);
  }
  function setHeightBmr(e){
    setHeight(e.target.value);
  }
  function setAgeBmr(e){
    setAge(e.target.value);
  }
  function setGenderBmr(e){
    setGender(e.target.value);
  }
  function setCaloriesBmr(e){
    setCalories(e.target.value);
  }

  useEffect(() => {
    if (height!==0) {
      if (gender) {
        // womens BMR
        setCalories(10 * weight + 6.25 * height - 5 * age - 161)
      }
    }
  }
  )

  // exports.BMR_men = BMR_men;
  // function BMR_women(weight, height, age) {
  //     return Number((10 * weight + 6.25 * height - 5 * age - 161).toFixed(2));
  // }
  // exports.BMR_women = BMR_women;
  // function IBW_men(height, age) {
  //     return Number((50 + 2.3 * ((height - 60) / 2.54)).toFixed(2));
  // }

  return (
    <div class="card-deck">
      <div className="col-sm-6">
        <div className="row">
          <div className="card text-center">
            <h2>BMR Calculator</h2>
            <h5>
              Basal metabolic rate (BMR). Even when resting, your body burns
              calories by performing basic functions to sustain life such as:
              breathing, circulation, nutrient processing and cell production.
              Basal metabolic rate is the number of calories your body needs to
              accomplish its most basic (basal) life-sustaining functions.
            </h5>
            <form>
              <label>
                Weight
                <input value="" />
              </label>
              <br></br>
              <label>
                Height
                <input value="" />
              </label>
              <br></br>
              <label>
                Age
                <input value="" />
              </label>
              <br></br>
              <label>
                Gender
                <select>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
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
                type="submit"
              >
                Reset
              </button>
            </form>
            <div className="center">
              <h5>Your BMR is: </h5>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bmr;
