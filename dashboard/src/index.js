import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import "./index.css";
import Home from "./components/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axios
      .post(
        "http://localhost:3002/auth/verify",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.status) {
          setIsAuthenticated(true);
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch((err) => {
        console.error("Authentication verification failed:", err);
        window.location.href = "http://localhost:3000/login";
      });
  }, []);

  // While checking JWT
  if (isAuthenticated === null) {
    return <div>Checking authentication...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);