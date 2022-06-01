import React, { useState } from "react";
import "../css/main.css";

const NavbarComponent = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
  return (
    <div className="navbar-main">
      <nav className="navigation">
      <a href="/" className="brand-name">
        Matt Stillman
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default NavbarComponent;
