import React from "react";

function Cards() {
  return (
    <div class="container">
      <h2 class="type-large-fat xl:type-56-bol text-center lg:pt-56 xl:pt-64 mb-32 xl:mb-64">What is WellFit?</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-64">
        <div>
          <img src="/media/usp-diets-45675b0b.svg" width="154" height="100" class="mt-auto transition" alt="" />
          <h3 class="mt-24 md:mt-40 mb-8 md:mb-16 type-med-fat">Your Meals</h3>
          <p class="mb-16 type-default leading-body">Log your calories intake searching for the food you had today</p>
        </div>
        <div>
          <img src="/media/usp-diets-45675b0b.svg" width="154" height="100" class="mt-auto transition" alt="" />
          <h3 class="mt-24 md:mt-40 mb-8 md:mb-16 type-med-fat">Your Workouts</h3>
          <p class="mb-16 type-default leading-body">Log your workouts</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;