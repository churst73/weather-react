import React from "react";
import Search from "./Search.js";
import Results from "./Results.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Results />
      </div>
    </div>
  );
}

export default App;
