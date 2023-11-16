import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./AuthContent";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    {/* 163741164506-pkvf3cgnjnaf1h3srfuhdr2s17j63hqg.apps.googleusercontent.com */}
    {/* 106987708628-69u7ibsorp0rfkaq35qvril6j09gp4st.apps.googleusercontent.com */}
    <GoogleOAuthProvider clientId="106987708628-69u7ibsorp0rfkaq35qvril6j09gp4st.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
