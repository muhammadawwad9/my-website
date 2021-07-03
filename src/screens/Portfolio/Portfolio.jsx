import React, { useEffect } from "react";
import "./Portfolio.scss";

import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <Header />
      <MobileMenu />
      <div className="my-portfolio">
        <div className="header-area">
          <h1>PORTFOLIO</h1>
        </div>

        <div className="projects">
          <h2>PROJECTS</h2>
          <div className="cards">
            <div className="project">
              <div className="project-image">
                <a
                  href="https://join-and-enjoy.netlify.app/"
                  target="_blank"
                  className="overlay-link"
                >
                  <div className="overlay"></div>
                </a>

                <a
                  href="https://join-and-enjoy.netlify.app/"
                  target="_blank"
                  className="image-link"
                >
                  <img src="images/chat-app.JPG" alt="" />
                </a>
              </div>
              <h3>
                <a href="https://join-and-enjoy.netlify.app/" target="_blank">
                  Live Chat Rooms
                </a>
              </h3>
            </div>

            <div className="project">
              <div className="project-image">
                <a
                  href="https://awgram.netlify.app/"
                  target="_blank"
                  className="overlay-link"
                >
                  <div className="overlay"></div>
                </a>

                <a
                  href="https://awgram.netlify.app/"
                  target="_blank"
                  className="image-link"
                >
                  <img src="images/awgram.jpg" alt="" />
                </a>
              </div>
              <h3>
                <a href="https://awgram.netlify.app/" target="_blank">
                  Awgram
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
