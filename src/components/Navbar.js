import React from "react";
import sublinks from "../data";

function Navbar() {
  return (
    <nav className="main-nav">
      <div className="navbar">
        <div className="container">
          <div className="logo">stripe</div>
          <ul className="nav-links">
            {sublinks.map((link, index) => {
              return (
                <li key={index} className="nav-link">
                  <button className="btn link-btn">{link.page}</button>
                </li>
              );
            })}
          </ul>
          <button className="btn btn-login">sing in</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
