import { oneRepMaxEpley as repsMax } from "fitness-calc";
import React, { useState } from "react";


function Workout() {
  // state
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [exercise, setExercise] = useState(0);
  const [oneRepMaxEpley, setOneRepMaxEpley] = useState(0);

  let calcOneRepMax = (e) => {
    // prevent submitting
    e.preventDefault();

    if (weight === 0 || reps === 0) {
      alert("Please enter valid weight and reps");
    } else {
      // Epley formula
      // let oneRepMaxEpley = weight * (1 + reps / 30);
      let oneRepMaxEpley = repsMax(weight, reps)
      setOneRepMaxEpley(oneRepMaxEpley.toFixed(1));
    }
  };

  // HTML structure
  return (
    <div className="card-deck">
      <div>
        <div className="row">
          <div className="card text-center">
            <h2 className="title">One Rep Max Calculator</h2>
            <h5>What is 1RM?</h5>
            <p>
              Your one-rep max is the max weight you can lift for a single
              repitition for a given exercise.  Our one rep max calculator is using the Epley formula.
            </p>
            <p>
              Enter the weight and reps to get the estimate of your 1RM (one-rep
              max).
            </p>
            <form onSubmit={calcOneRepMax}>
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
                    Reps
                    <input value={reps} onChange={(e) => setReps(e.target.value)} />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Exercise
                    <select>
                      <option value="bench">Bench Press</option>
                      <option value="deadlift">Deadlift</option>
                      <option value="squat">Squat</option>
                    </select>
                  </label>
                </div>
                <br />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-trackers"
                  type="submit"
                >
                  Calculate 1RM
                </button>
              </div>
            </form>
            <div className="center">
              <h5>Your 1RM is: {oneRepMaxEpley}</h5>
            </div>
            <br></br>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Workout;
