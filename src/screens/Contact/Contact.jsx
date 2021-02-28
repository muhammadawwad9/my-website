import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.scss";

import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const Contact = () => {
  //states
  const [objToSend, setObjToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  //functions
  //submitHandler
  const submitHandler = (e) => {
    const localServer = "http://localhost:4000/";
    const heroku = "https://muhammad-awwad-website-api.herokuapp.com/";
    e.preventDefault();
    fetch(`${localServer}form-submission`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(objToSend),
    })
      .then(() => {
        document.querySelector(".form-section form button").style.background =
          "green";
        toast.success("Your Message Was Submitted Successfully", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      })
      .catch(() => {
        toast.error("Something Went Wrong, Try Again Later!", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };

  //changeHandler
  const changeHandler = (e) => {
    setObjToSend((prev) => {
      const updatedObj = { ...prev, [e.target.id]: e.target.value };
      return updatedObj;
    });
  };

  //inValid
  const invalid = (e) => {
    e.target.classList.add("invalid");
  };
  return (
    <div className="Contact">
      <Header />
      <MobileMenu />
      <div className="contact">
        <div className="header-area">
          <h1>CONTACT</h1>
        </div>
        <div className="form-section">
          <h2>DROP ME A MESSAGE</h2>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/contact"
          >
            <input type="hidden" name="contact" value="contact" />
            <div className="form-elem">
              <label htmlFor="name">Your Name</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => changeHandler(e)}
                onInvalid={(e) => invalid(e)}
                required
              />
            </div>
            <div className="form-elem">
              <label htmlFor="email">Your Email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => changeHandler(e)}
                onInvalid={(e) => invalid(e)}
                required
              />
            </div>
            <div className="form-elem">
              {" "}
              <label htmlFor="message">Your Message</label>
              <br />
              <textarea
                id="message"
                name="message"
                required
                onChange={(e) => changeHandler(e)}
                onInvalid={(e) => invalid(e)}
              ></textarea>
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
