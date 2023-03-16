import React from "react";

function Footer() {
  return (
    <footer className="p-5 card-bg-primary text-light text-center position-relative">
    <div className="container">
      <div className="social">
        <button type="button" className="btn btn-acc-round">
          <a href="https://www.youtube.com/"><span className="fa-brands fa-youtube"
              aria-hidden="true"></span><span className="sr-only">Youtube</span></a>
        </button>
        <button type="button" className="btn btn-acc-round">
          <a href="https://twitter.com"><span className="fa-brands fa-twitter"
              aria-hidden="true"></span><span className="sr-only">Twitter</span></a>
        </button>
        <button type="button" className="btn btn-acc-round">
          <a href="https://www.instagram.com/"><span className="fa-brands fa-instagram"
              aria-hidden="true"></span><span className="sr-only">Instagram</span></a>
        </button>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2023 Bex Ford - Clelia Mangione</p>
        <a href="www.google.com" className="position-absolute bottom-0 end-0 p-5"><i className="bi bi-arrow-up-circle h1"></i></a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;