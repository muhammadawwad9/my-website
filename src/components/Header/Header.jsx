import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  //functions
  const dropMenu = () => {
    const mobileMenu = document.querySelector(".MobileMenu");
    mobileMenu.classList.toggle("show");
  };
  return (
    <header className="Header">
      <div className="logo">
        <NavLink to="/home">
          {" "}
          <img src="images/logo.png" alt="logo" />
        </NavLink>
      </div>
      <div className="fas fa-bars" onClick={() => dropMenu()}></div>

      <div className="pages-links">
        <NavLink className="nav-link" activeClassName="active-link" to="/home">
          HOME
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active-link"
          to="/portfolio"
        >
          PORTFOLIO
        </NavLink>
        <NavLink className="nav-link" activeClassName="active-link" to="/about">
          ABOUT
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active-link"
          to="/contact"
        >
          CONTACT
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
