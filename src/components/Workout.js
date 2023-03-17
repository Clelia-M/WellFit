import React from "react";
import "fitness-calc";

// HTML structure
function Workout() {
  return (
    <div className="card">
      <h2>One Rep Max Calculator</h2>
      <h5>What is 1RM?</h5>
      <p>
        One rep max using the Epley formula. The Epley 1 Rep Max formula
        estimates how much the weight lifter could have lifted one time (RM)
        based on the maximum number of reps (r) of a lesser weight (w). This
        method is used in some competitions and in many gyms to avoid injuries
        and to provide a more consistent measure of endurance and strength. The
        Epley Formula for one repetition max is as follows: 1RM = W•(1 + r/30){" "}
      </p>
      <p>
        Enter the weight and reps to get the estimate of your 1RM (one-rep max).
        Your one-rep max is the max weight you can lift for a single repitition
        for a given exercise.
      </p>
      <form>
        <label>
          Weight (kg)
          <input type="text" weight="weight" />
        </label>
        <br></br>
        <label>
          Reps
          <input type="text" reps="reps" />
        </label>
        <br></br>
        <label>
          Exercise
          <select>
            <option value="bench">Bench Press</option>
            <option value="deadlift">Deadlift</option>
            <option value="squat">Squat</option>
          </select>
        </label>
        <br></br>
        <input type="submit" value="Calculate 1RM" />
      </form>
      <br></br>
    </div>
  );
}

const fitnessCalc = require("fitness-calc");

const weight = 100;
const reps = 5;

const oneRepMax = fitnessCalc.oneRepMaxEpley(weight, reps);
console.log(oneRepMax);

export default Workout;
