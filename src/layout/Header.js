import React from "react";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper container">
          <a href="dvd.html" className="brand-logo">
            React
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
