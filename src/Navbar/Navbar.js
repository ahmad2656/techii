import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const shah = useRef();

  const showNavbar = () => {
    shah.current.classList.toggle("responsive");
  };
  return (
    <>
      <header>
        <img src="log.png" alt="" id="logo" />
        <nav ref={shah}>
          <NavLink className="tags" to="/">
            . Home
          </NavLink>

          <NavLink className="tags" to="/About">
            . About us
          </NavLink>

          <NavLink className="tags" to="/Services">
            . Services
          </NavLink>

          <NavLink className="tags page" to="/Pages">
            . Pages
          </NavLink>

          <NavLink className="tags" to="/Contact us">
            . Contact
          </NavLink>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>

        <button id="log-in">Log in</button>
      </header>
    </>
  );
};

export default Navbar;
