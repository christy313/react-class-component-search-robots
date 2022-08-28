import React, { Component } from "react";
import CardList from "../components/CardList";
import "tachyons";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="tc">
        <h1>Search Robots</h1>
        <SearchBox SearchChange={this.onSearchChange} />
        <CardList robots={robots} />
      </div>
    );
  }
}
