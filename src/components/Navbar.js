import React from "react";
import sublinks from "../data";
import { RiArrowRightSLine } from "react-icons/ri";
import { useGlobalContext } from "../context";

function Navbar() {
  const { setLocation, openSubmenu, closeSubmenu } = useGlobalContext();

  const handleLocation = (e, index) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    openSubmenu();
    setLocation({ index, page, location: center });
  };

  const handleMouseLeave = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="main-nav" onMouseOver={handleMouseLeave}>
      <div className="navbar">
        <div className="container">
          <div className="logo">stripe</div>
          <ul className="nav-links">
            {sublinks.map((link, index) => {
              return (
                <li key={index} className="nav-link">
                  <button
                    className="btn link-btn"
                    onMouseOver={(e) => handleLocation(e, index)}
                  >
                    {link.page}
                  </button>
                </li>
              );
            })}
          </ul>
          <button className="btn btn-login">
            sing in
            <RiArrowRightSLine className="arrow-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
