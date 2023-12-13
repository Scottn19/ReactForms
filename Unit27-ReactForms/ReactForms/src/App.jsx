import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import "./app.css"; // Import the app.css file

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="app-container">
      <h1>Authentication App</h1>
      {!token ? (
        <SignUpForm setToken={setToken} />
      ) : (
        <Authenticate token={token} />
      )}
    </div>
  );
}