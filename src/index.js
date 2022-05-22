import "modern-normalize/modern-normalize.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// ReactDOM.render(element, container)

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
