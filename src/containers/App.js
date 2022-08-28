import React, { Component } from "react";
import CardList from "../components/CardList";
import "tachyons";
import { robots } from "../robots";

export default class App extends Component {
  render() {
    return (
      <div>
        <CardList robots={robots} />
      </div>
    );
  }
}
