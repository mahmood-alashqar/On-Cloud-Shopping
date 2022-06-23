
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Image, Stack } from 'react-bootstrap';
import LoginButton from './logging/LoginButton';
import { withAuth0 } from "@auth0/auth0-react";

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark"  >
          <Container>
            <Navbar.Brand href="/"> <Image src={'https://media-exp1.licdn.com/dms/image/C4D0BAQHH_MbG8kmvbQ/company-logo_200_200/0/1639217779765?e=2147483647&v=beta&t=L1soCINu0qI7WxFaOutsgSycVDJiPbthA3fUiYi2cPw'} alt='' height='38rem' />  </Navbar.Brand>
            <Nav className="me-auto">
              <Stack  direction="horizontal" gap={3}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Favorite">Favorite</Nav.Link>
              <Nav.Link href="/login">
              <div className="vr" />
                <LoginButton/>
              </Nav.Link>
              </Stack>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default withAuth0(Header)