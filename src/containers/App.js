import React, { Component } from "react";
import CardList from "../components/CardList";
import "tachyons";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";

export default class App extends Component {
  render() {
    return (
      <div className="tc">
        <h1>Search Robots</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}
