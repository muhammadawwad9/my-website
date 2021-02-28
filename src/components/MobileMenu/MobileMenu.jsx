import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./MobileMenu.scss";

const MobileMenu = () => {
  //useEffect
  useEffect(() => {
    const wholeMenu = document.querySelector(".MobileMenu");
    const navLinksMobile = Array.from(
      document.getElementsByClassName("nav-link-mobile")
    );
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 940) wholeMenu.classList.remove("show");
    });
    navLinksMobile.forEach((navLink) => {
      navLink.addEventListener("click", (e) => {
        wholeMenu.classList.toggle("show");
      });
    });
  }, []);
  return (
    <div className="MobileMenu">
      <NavLink className="nav-link-mobile" to="/home">
        HOME
      </NavLink>
      <NavLink className="nav-link-mobile" to="/portfolio">
        PORTFOLIO
      </NavLink>
      <NavLink className="nav-link-mobile" to="/about">
        ABOUT
      </NavLink>
      <NavLink className="nav-link-mobile" to="/contact">
        CONTACT
      </NavLink>
    </div>
  );
};

export default MobileMenu;
