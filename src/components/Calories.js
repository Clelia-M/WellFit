import React from "react";

function Calories() {
  // HTML structure
  return (
    <div class="card-deck">
      <div className="col-sm-6">
        <div className="row">
          <div className="card text-center">
            <h2>Calories Calculator</h2>
            <h5>
              See how many calories you have burned during your exercise..
            </h5>
            <form>
              <label>
                Activity
                <input value="activity" />
              </label>
              <br></br>
              <label>
                Weight
                <input value="weight" />
              </label>
              <br></br>
              <label>
                Duration
                <input value="duration" />
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
              <h5>Total amount of calories burned: </h5>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calories;
