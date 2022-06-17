import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import Profile from '../Profile';

function LoginButton() {
  const { isAuthenticated, loginWithRedirect, } = useAuth0();
  console.log("LogineButton.Class LiNE: 7 Im In")
  return !isAuthenticated && (
    <>
      <>
        {
          isAuthenticated &&
          <Profile newItemAfterLogin={this.props.newItemAfterLogin} />
        }
      </>
      <Button class="bg-light border  btn-sm" variant='success' direction="horizontal" onClick={loginWithRedirect}>Log in</Button>
    </>
  );
}

export default LoginButton;