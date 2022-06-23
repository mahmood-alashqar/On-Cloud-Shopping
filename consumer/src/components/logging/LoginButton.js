import React from 'react';
import { useAuth0,withAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

function LoginButton() {
  const { isAuthenticated, loginWithRedirect, } = useAuth0();
  return !isAuthenticated && (
    <>
      <Button variant="primary"  onClick={()=>loginWithRedirect('/favorite')}>Log in</Button>
    </>
  );
}

export default withAuth0(LoginButton)