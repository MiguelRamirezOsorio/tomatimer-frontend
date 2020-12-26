import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiTomato } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthOptions from "../../auth/AuthOptions";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


 
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <GiTomato className="navbar-icon" />
          Tomatimer
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/programs"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Programs
            </Link>
          </li>
          <AuthOptions />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
