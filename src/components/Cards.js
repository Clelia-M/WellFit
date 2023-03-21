import React from "react";

function Cards() {
  return (
    <div id="cards-container">
    <div className="container">
      <h2 className="type-large-fat xl:type-56-bol text-center lg:pt-56 xl:pt-64 mb-32 xl:mb-64">What is WellFit?</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4 text-center my-64">
        <div className="col">
          <div className="card border-0">
            <img src="../images/undraw_breakfast_psiw.png" className="card-img-top" alt="" />
            <div className="card-body">
              <h3 className="card-title mt-24 md:mt-40 mb-8 md:mb-16 type-med-fat">Your Food tracker</h3>
              <p className="card-text mb-16">Keeping track of what you eat and drink is an important step on your health journey. Don't worry, we've made it easy for you! Simply search for your favorite foods and log them to get an accurate count of your daily calorie intake. <br></br> Start today and take control of your health!</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <img src="../images/undraw_personal_training_0dqn.png" className="card-img-top" alt="" />
            <div className="card-body">
              <h3 className="card-title mt-24 md:mt-40 mb-8 md:mb-16 type-med-fat">Your Workout calculator</h3>
              <p className="card-text mb-16 type-default leading-body">Exercising regularly is key to reaching your health and fitness goals, and tracking your workouts calories burned can help you stay motivated and see progress. Keep track of your progress over time. Whether you prefer running, weightlifting, or yoga, we've got you covered. Start checking your workouts today and take the first step towards a healthier you!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
