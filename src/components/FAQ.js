import React from "react";

function FAQ() {
    return(
        <section id="questions" class="p-5">
        <div class="container">
          <h2 class="text-center mb-4">Frequently Asked Questions</h2>
          <div class="accordion accordion-flush" id="questions">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-1">
                  What is the purpose of this app?
                </button>
              </h2>
              <div id="question-1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#questions">
                <div class="accordion-body">JustVeggie mission is to provide recipe ideas for people who follow a vegetarian
                  and gluten-free diet. </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-2">
                  Is this application free to use?
                </button>
              </h2>
              <div id="question-2" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#questions">
                <div class="accordion-body">Yes, the app is completely free to use as of now because it is in its beta
                  testing phase.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-3">
                  Can I save my favourite receipes on the app?
                </button>
              </h2>
              <div id="question-3" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#questions">
                <div class="accordion-body">You can save the last 6 recipes that you serached for so if you like them, you
                  will always have the possibility to cook them again.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-4">
                  Are all the recipes in this app vegeterian and gluten-free?
                </button>
              </h2>
              <div id="question-4" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#questions">
                <div class="accordion-body">Yes, all the recipes provided on this app are specifically designed to be both
                  vegetarian and gluten-free.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-5">
                  Are there options to filter recipes by specific dietary needs or restrictions?
                </button>
              </h2>
              <div id="question-5" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#questions">
                <div class="accordion-body">Sure! The database is already set to provide you only vegetarian and gluten-free
                  recipes but you can also include or exclude certain ingredients or choose your favourite cousine.</div>
              </div>
            </div>
          </div>
          </div>
      </section>
        );
    }; 
export default FAQ;