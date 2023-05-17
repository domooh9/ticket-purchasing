import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Routs from "./Routes";
import { logo } from "./assets/image";

const App = () => {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "220px", height: "auto" }}
          />
          <Navbar.Brand href="/">
            <h3>
              Shop live events and discover can't-miss concerts, music, comedy
              and more.
              <p style={{ fontSize: "18px", fontWeight: "normal" }}>
                {" "}
                All the tickets have the same billing structure.
              </p>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <div className="div">
        <Routs />
      </div>
    </>
  );
};

export default App;
