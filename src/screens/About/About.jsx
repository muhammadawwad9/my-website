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
                My name is Muhammad Awwad, 21 years old from Israel,Tamra ,
                highly motivated developer and fast learner. I completed a
                16-weeks Full Stack Bootcamp at <i>Founders and Coders</i> in
                Haifa, and I'm seeking to launch a career developing web
                applications. I always liked to create things from my own, I can
                work independently and also with a team, and always hungry to
                learn new technologies. I love what I do, and I enjoy/embrace
                each new project I become a part of.
              </p>
            </div>
            <img src="images/coding.jpg" alt="Coding" />
          </div>
          <div className="section">
            <div class="left-side">
              <h2>PERSONALY</h2>
              <h2 class="hobbies">Hobbies / Interests</h2>
              <p>
                Aside from coding and developing, I am a basketball player.
                Basketball is an important part in my life, I grew up playing
                basketball for different teams, and in these days, in my free
                time I play basketball with friends, this really makes me feel
                fresh and full of positive energy, so I come back fresher and
                continue my work in an Efficient way.
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
