import React from "react";
import './style.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand">
      <a className="navbar-brand" href="/">Google Books Search</a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <a className="nav-link" href="/saved"><i class="fa fa-bookmark fa-fw" aria-hidden="true"></i>Saved Books</a>
        </li>
      </ul>

    </nav>
  )
};

export default Nav;