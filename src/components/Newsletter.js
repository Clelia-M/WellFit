import React from "react";

function Newsletter() {
  return (
    <section id="newsletter" className="news-cust p-5">
    <div className="container">
      <div className="d-md-flex justify-content-between align-items-center">
        <h3 className="mb-3 mb-md-0">
          Sign up for Our Newsletter
        </h3>

        <div className="input-group news-input">
          <input type="text" className="form-control" placeholder="Enter Email" />
          <button className="btn btn-news btn-lg" type="button">Subscribe</button>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Newsletter;