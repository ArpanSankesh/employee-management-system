// import { StrictMode } from 'react'
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";
import TaskContext from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContext>
      <AuthContext>
        <App />
      </AuthContext>
    </TaskContext>
  </React.StrictMode>
);
