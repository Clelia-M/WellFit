import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar className="navbar navbar-expand-lg py-3" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-brand" href="#">WellFit</Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navmenu">
          <Nav className="navbar-nav ms-auto">
            <Nav.Link className="navbar-item" href="#cards-container">What is WellFit?</Nav.Link>
            <Nav.Link className="navbar-item" href="#nutritions">Your Meals</Nav.Link>
            <Nav.Link className="navbar-item" href="#workout">Your Workout</Nav.Link>
            <Nav.Link className="navbar-item" href="#bmi">BMI & 1RM</Nav.Link>
            <Nav.Link className="navbar-item" href="#questions">FAQ</Nav.Link>
            <Nav.Link className="navbar-item" href="#newsletter">Newsletter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;