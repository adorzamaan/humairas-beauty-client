import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import AuthProvider from "./Context/AuthProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <Toaster position="top-center"></Toaster>
    </AuthProvider>
  </React.StrictMode>
);
