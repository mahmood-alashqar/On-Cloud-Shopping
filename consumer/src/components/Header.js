
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/"> <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZow71MGzRMIzsNoNElI09LPNTiTurikGR4SL1bSqYXrAHhye_-hpXABGK2gvQP608eaYnwds5J0pZg&usqp=CAU'} alt='' height='38rem' />  </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Favorite">Favorite</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header