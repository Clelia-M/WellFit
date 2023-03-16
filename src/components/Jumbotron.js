import React from "react";

function Jumbotron() {
  return (
    <header className="jumbotron jumbotron-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <img src="../images/undraw_fitness_tracker_3033.png" className="img-fluid d-block mx-auto" alt="" />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h1 className="type-super">Health, <br></br> made simple.</h1>
            <p className="type-large mb-5 lead"> We're here to help you achieve your health and fitness goals. With
              easy-to-use tools for tracking your meals and workouts, you'll be
              on your way to a healthier you in no time.</p>
            </div>
          </div>
    </header>
  );
}

export default Jumbotron;
