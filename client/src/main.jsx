import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nn28xpqkhx5xhey2.us.auth0.com"
      clientId="H93ySjLA8XrZNbNYHhpyWWBy8YYOkZWK"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "http://localhost:8000/api",
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
