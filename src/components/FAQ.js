import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
  return (
    <section id="questions" class="p-5">
       <div class="container">
       <h2 class="text-center mb-4">Frequently Asked Questions</h2>
    <Accordion defaultActiveKey="0" id="questions" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the purpose of this app?</Accordion.Header>
        <Accordion.Body>
        WellFit mission is to provide recipe ideas for people who follow a vegetarian and gluten-free diet.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is this application free to use?</Accordion.Header>
        <Accordion.Body>
        Yes, the app is completely free to use as of now because it is in its beta testing phase.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>  Can I save my favourite receipes on the app?</Accordion.Header>
        <Accordion.Body>
        You can save the last 6 recipes that you serached for so if you like them, you will always have the possibility to cook them again.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>  Are all the recipes in this app vegeterian and gluten-free? </Accordion.Header>
        <Accordion.Body>
        Yes, all the recipes provided on this app are specifically designed to be both vegetarian and gluten-free.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header> Are there options to filter recipes by specific dietary needs or restrictions? </Accordion.Header>
        <Accordion.Body>
        Sure! The database is already set to provide you only vegetarian and gluten-free recipes but you can also include or exclude certain ingredients or choose your favourite cousine.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </section>
  );
}

export default FAQ;