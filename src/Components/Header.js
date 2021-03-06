import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";

export default class Header extends React.Component {
  render() {
    return (
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">GIFt’ed</span>
          <span class="heading-primary-sub">
            Describe <span className="you">you</span> with a{" "}
            <span className="gif">Gif</span>
          </span>
        </h1>
        <SearchBar />
      </div>
    );
  }
}
