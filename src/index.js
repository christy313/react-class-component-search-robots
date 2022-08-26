import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CardList from "./CardList";
import { robots } from "./robots";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardList robots={robots} />);
