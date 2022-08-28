import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import { robots } from "./robots";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App robots={robots} />
  </React.StrictMode>
);
