import React from "react";
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
                  <button>View Source Code</button>
                </a>

                <img src="images/barber-appointment.jpg" alt="" />
              </div>
              <h3>
                <a href="https://cranky-babbage-f1c5b5.netlify.app">
                  Barber Appointment Website
                </a>
              </h3>
            </div>
            <div className="project">
              <div className="project-image">
                <h2 className="work-in-progress">Work In Progress</h2>
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
                    View Source Code
                  </button>
                </a>

                <img src="images/ecommerce.jpg" alt="" />
              </div>
              <h3>
                <a href="#">ECommerce Web Shop</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
