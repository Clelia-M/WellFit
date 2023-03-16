import React from "react";

function Workout() {
  return (
    <div className="card">
      <h2>Weights and Reps Calculator</h2>
      <p>
        Enter the weight and reps to get the estimate of your 1RM (one rep max)
      </p>
      <form>
        <label>
          Weight
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Reps
          <input type="text" name="name" />
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
        <input type="submit" value="Show Graph" />
      </form>
    </div>
  );
}

export default Workout;
