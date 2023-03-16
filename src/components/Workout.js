import React from "react";

function Workout() {
  return (
    <div className="card">
      <h2>Weight and Reps Calculator</h2>
      <p>
        Enter the weight and reps to get the estimate of your 1RM (one rep max)
      </p>
      <form>
        <label>
          Weight
          <input type="text" weight="weight" />
          <select name="liftmassunit" id="liftmassunit">
            <option value="kg"> kg </option>
            <option value="lb"> lb </option>
            </select>
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
        <input type="submit" value="Show Graph" />
      </form>
      <br></br>
      <h5>What is 1RM?</h5>
      <p>One repo max ................</p>
    </div>
  );
}

export default Workout;
