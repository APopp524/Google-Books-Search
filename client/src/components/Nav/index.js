import React from "react";
import './style.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand">
      <a className="navbar-brand" href="/">Google Books Library</a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Search for Books</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">View Saved Books</a>
        </li>
      </ul>

    </nav>
  )
};

export default Nav;