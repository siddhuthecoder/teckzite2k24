import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Corrected import path for App.jsx
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider
    clientId={import.meta.env.VITE_APP_GOOGLE_OAUTH_CLIENTID}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);
