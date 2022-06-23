import { Auth0Provider } from "@auth0/auth0-react";
// import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'; import App from "./App";
const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Auth0Provider
    domain="dev-fvita0ei.us.auth0.com"
    clientId="FeaPmzUjOqjaR7zxLREZS93h8qW1UgyY"
    redirectUri={window.location.origin}
  >
    <App  />
  </Auth0Provider>
);






