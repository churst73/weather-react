import React from "react";
import Search from "./Search.js";
import Results from "./Results.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Results defaultCity="London" />
      </div>
      <div className="mt-5">
        <a
          href="https://github.com/churst73/weather-react"
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
