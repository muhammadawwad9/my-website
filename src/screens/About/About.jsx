import React, { useEffect, useState } from "react";
import "./About.scss";

//components imports
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import Activities from "../../components/Activities/Activities";

const About = () => {
  //states
  const [animationed, setAnimationed] = useState(
    0
  ); /*This state in order to check if the whole animation process is finished, and when it ends I will remove the class that makes the animation for each tag and bring it back so we have the animation again :)*/

  //useEffect
  useEffect(() => {
    const allActivities = Array.from(document.getElementsByTagName("h3"));
    allActivities.forEach((activity) => {
      activity.addEventListener("animationend", () => {
        setAnimationed((prev) => prev + 1);
      });
    });
  }, []);

  useEffect(() => {
    const allActivities = Array.from(document.getElementsByTagName("h3"));

    if (animationed == 10) {
      allActivities.forEach((activity) => {
        activity.classList.remove(
          "animate-" + activity.getAttribute("data-text")
        );
        setTimeout(
          () =>
            activity.classList.add(
              "animate-" + activity.getAttribute("data-text")
            ),
          12
        );
      });

      setAnimationed(0);
    }
  }, [animationed]);

  return (
    <div className="About">
      <Header />
      <MobileMenu />
      <div className="about-me">
        <div className="header-area">
          <h1>ABOUT ME</h1>
        </div>
        <Activities />

        <div className="about-awwad">
          <div className="section">
            <div className="left-side">
              <h2>PROFESSIONALY</h2>
              <p>
                My name is Muhammad Awwad,{" "}
                {new Date().getMonth() + 1 > 2
                  ? new Date().getFullYear() - 1999
                  : new Date().getMonth() + 1 == 2 && new Date().getDay() >= 13
                  ? new Date().getFullYear() - 1999
                  : new Date().getFullYear() - 1999 - 1}{" "}
                years old from Israel,Tamra , I'm a highly motivated developer
                and fast learner. I finished an intensive 16-weeks Full Stack
                Bootcamp at
                <i> Founders and Coders</i> in Haifa, Israel. Currently I'm
                seeking to launch a career in web development. I'm always hungry
                to learn new technologies and to build things on my own. I can
                work independently and also with a team. Coding makes me feel
                great, I really love what I do, and I enjoy/embrace each new
                project I become a part of.
              </p>
            </div>
            <img src="images/coding.jpg" alt="Coding" />
          </div>
          <div className="section">
            <div class="left-side">
              <h2>PERSONALLY</h2>
              <h2 class="hobbies">Hobbies / Interests</h2>
              <p>
                Aside from coding and developing, I am a basketball player.
                Basketball is an important part of my life, I grew up playing
                for different teams, and nowdays I play with my friends in my
                free time. Playing basketball makes me feel amazing and full of
                positive energy, also helps me to get back to work with a clear
                mind and get things done in a more efficient way.
              </p>
            </div>
            <img
              src="images/me-basketball.jpg"
              alt="Muhammad Awwad playing basketball"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
