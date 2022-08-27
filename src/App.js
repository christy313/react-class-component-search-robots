import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div>
      <h1>Search Robots</h1>
      <SearchBox></SearchBox>
      <CardList robots={robots} />
    </div>
  );
};

export default App;
