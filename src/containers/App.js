import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1>Search Robots</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
