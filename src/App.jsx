import React from "react";
import Events from "./components/Events";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Tickets from "./components/Tickest";

const App = () => {
  

  return (
    <>
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand  href="#home">
          Ticket-Booking
       <h3> Let's Make Live Happen</h3>
            Shop millions of live
           events and discover can't-miss concerts, 
           games, theater and more.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
     </Container>
    </Navbar>
    <div className="event">
    <Events />
    {/* <Tickets /> */}
    </div>
    </>
  );
};

export default App;