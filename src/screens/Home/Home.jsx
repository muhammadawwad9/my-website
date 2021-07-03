import React from "react";
import "./Home.scss";

//components imports
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <MobileMenu />
      <div className="details">
        <img src="images/me.jpg" alt="Muhammad Awwad" className="profile-pic" />
        <h1>Muhammad Awwad</h1>
        <h3>Full Stack Web Developer</h3>
        <div className="links">
          <a href="https://www.linkedin.com/in/muhammadawwad9/" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/muhammadawwad9" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/Muhammad.Ali.Awwad/"
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/muhammadawwad9/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
