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
      <div className="mt-5">
        <a
          href="https://github.com/churst73/hurst-weather-app"
          target="_blank"
          rel="noreferrer"
          className="coder-link"
        >
          Open-source code
        </a>{" "}
        <span className="name">by Chelsea Hurst</span>
      </div>
    </div>
  );
}

export default App;
