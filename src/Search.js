import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="prompt">
        <input
          type="text"
          placeholder="I wonder what the weather is in . . ."
        />
        <button type="submit" className="button-search">
          Search
        </button>
        <a href="https://www.google.com/">
          <i className="fas fa-map-marker-alt"></i>
        </a>
      </form>
    </div>
  );
}
