import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/logging/LoginButton';
import LogoutButton from './components/logging/LogoutButton.js';
import Profile from './components/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Main />
        
        <LogoutButton />
        <>{this.props.auth0.isAuthenticated &&
          <>
            <Profile />
          </>
        }
        </> */}
        <>
        {/* <Header /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Header/>
              <Main />
            </Route>
            <Route exact path='/favorite'>
              <Profile />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
      </div>
    )
  }
}

export default withAuth0(App)