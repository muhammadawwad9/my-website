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
        <div class="links">
          <a href="#" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" target="_blank">
            {" "}
            <i class="fab fa-github"></i>
          </a>
          <a href="#" target="_blank">
            {" "}
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank">
            {" "}
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      {/* <div id="my-details">
                <img class="profile-pic" src="./img/me.png">
                <h1 id="name">Muhammad Awwad</h1>
                <h3 id="job">Full Stack Web Developer</h3>
                <div class="links">
                    <a href="https://www.linkedin.com/login" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/" target="_blank"> <i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/" target="_blank"> <i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"> <i class="fab fa-instagram"></i></a>
                </div>
            </div> */}
    </div>
  );
};

export default Home;
