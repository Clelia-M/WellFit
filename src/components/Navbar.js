// import React from "react";

// function Navbar() {
//   return (
//     <nav class="navbar navbar-expand-lg py-3">
//       <div class="container">
//         <a href="#" class="navbar-brand">WellFit</a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
//           <span class="navbar-toggler">
//             <span class="navbar-toggler-icon"></span>
//           </span>
//         </button>
//         <div class="collapse navbar-collapse" id="navmenu">
//           <ul class="navbar-nav ms-auto">
//             <li class="navbar-item">
//               <a href="#cards-container" class="nav-link">What is WellFit?</a>
//             </li>
//             <li class="navbar-item">
//               <a href="#nutritions" class="nav-link">Your Meals</a>
//             </li>
//             <li class="navbar-item">
//               <a href="#workout" class="nav-link">Your Workout</a>
//             </li>
//             <li class="navbar-item">
//               <a href="#questions" class="nav-link">FAQ</a>
//             </li>
//             <li class="navbar-item">
//               <a href="#newsletter" class="nav-link">Newsletter</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
            <Nav.Link className="navbar-item" href="#questions">FAQ</Nav.Link>
            <Nav.Link className="navbar-item" href="#newsletter">Newsletter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;