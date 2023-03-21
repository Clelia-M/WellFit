import { oneRepMaxEpley as repsMax} from "fitness-calc";
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
      <div className="col-sm-6">
        <div className="row">
          <div className="card text-center">
            <h2>One Rep Max Calculator</h2>
            <h5>What is 1RM?</h5>
            <p>
              One rep max using the Epley formula. The Epley 1 Rep Max formula
              estimates how much the weight lifter could have lifted one time
              (RM) based on the maximum number of reps (r) of a lesser weight
              (w). This method is used in some competitions and in many gyms to
              avoid injuries and to provide a more consistent measure of
              endurance and strength. The Epley Formula for one repetition max
              is as follows: 1RM = w*(1 + r/30){" "}
            </p>
            <p>
              Enter the weight and reps to get the estimate of your 1RM (one-rep
              max). Your one-rep max is the max weight you can lift for a single
              repitition for a given exercise.
            </p>
            <form onSubmit={calcOneRepMax}>
              <label>
                Weight (kg)
                <input
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </label>
              <br></br>
              <label>
                Reps
                <input value={reps} onChange={(e) => setReps(e.target.value)} />
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
              <button
                className="btn btn-secondary btn-lg btn-block"
                type="submit"
              >
                Calculate 1RM
              </button>
              <br></br>
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
