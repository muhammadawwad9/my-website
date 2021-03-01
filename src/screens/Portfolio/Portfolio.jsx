import React, { useEffect } from "react";
import "./Portfolio.scss";

import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const Portfolio = () => {
  //useEffect
  // useEffect(() => {
  //   window.addEventListener("resize", (e) => {
  //     if (e.target.innerWidth < 1120) {
  //       const wantedLinkTags=Array.from(document.getElementsByClassName("image-link"));
  //       wantedLinkTags.forEach(link=>{
  //         const href=link.parentElement.firstElementChild;
  //       })
  //       console.log(document.querySelector(".image-link").hrefparentElement);
  //     }
  //   });
  // }, []);
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
                <div className="overlay"></div>
                <a
                  href="https://cranky-babbage-f1c5b5.netlify.app"
                  target="_blank"
                >
                  <button>View Project</button>
                </a>
                <a
                  href="https://github.com/muhammadawwad9/barber-appointment-frontend"
                  target="_blank"
                >
                  <button>View Code</button>
                </a>

                <a
                  href="https://cranky-babbage-f1c5b5.netlify.app"
                  target="_blank"
                  className="image-link"
                >
                  <img src="images/barber-appointment.jpg" alt="" />
                </a>
              </div>
              <h3>
                <a
                  href="https://cranky-babbage-f1c5b5.netlify.app"
                  target="_blank"
                >
                  Barber Appointment Website
                </a>
              </h3>
            </div>
            <div className="project">
              <div className="project-image">
                <div className="overlay"></div>
                <a
                  href="https://cranky-babbage-f1c5b5.netlify.app"
                  target="_blank"
                >
                  <button style={{ opacity: "0.6" }} disabled>
                    View Project
                  </button>
                </a>
                <a href="#" target="_blank">
                  <button style={{ opacity: "0.6" }} disabled>
                    View Code
                  </button>
                </a>

                <a target="_blank" className="image-link">
                  <img src="images/ecommerce.jpg" alt="" />
                </a>
              </div>
              <h3>
                <a href="#" target="_blank">
                  ECommerce Web Shop <span>(WORK IN PROGRESS)</span>
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
