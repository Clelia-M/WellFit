import React from "react";

// HTML structure 
function Workout() {
  return (
    <div className="card">
      <h2>One Rep Max Calculator</h2>
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
      <h5>What is 1RM?</h5>
      <p>One rep max ................</p>
    </div>
  );
}

// one rep max function 
function OneRepMax() {
  const fitness = require('fitness-calc');

  const weight = 100;
  const reps = 5;
  
  const oneRepMax = fitness.oneRepMaxEpley(weight, reps);
  console.log(oneRepMax);
} 

export default Workout;
