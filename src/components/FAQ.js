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
        WellFit mission is designed to help busy moms achieve their weight loss goals by tracking their daily calorie intake and exercise routine.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is this application free to use?</Accordion.Header>
        <Accordion.Body>
        Yes, the app is completely free to use as of now because it is in its beta testing phase.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Can I track my calorie intake and exercise routine on the WellFit app?</Accordion.Header>
        <Accordion.Body>
        Absolutely! WellFit has a built-in tracking feature that allows you to log your daily meals and workouts. You can record your own calorie and fitness achievements, and the app also provide you with workout video-recommendations to help you stay on track.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can I use WellFit on my mobile device?</Accordion.Header>
        <Accordion.Body>
        Yes, WellFit is designed to work seamlessly on both desktop and mobile devices. Simply access the web app from your smartphone or tablet browser.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How can I get support if I have a problem with WellFit?</Accordion.Header>
        <Accordion.Body>
        If you have any issues or questions about using WellFit, our customer support team is always here to help. You can contact us via email at support@wellfit.com. We strive to respond to all inquiries within 24 hours.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </section>
  );
}

export default FAQ;