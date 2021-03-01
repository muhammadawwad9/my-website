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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  //submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    document
      .querySelector(".image-container")
      .classList.toggle("bring-it-back");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...objToSend }),
    })
      .then(() => {
        document
          .querySelector(".image-container")
          .classList.toggle("bring-it-back");
        document.querySelector(".form-section form button").style.background =
          "green";
        toast.success("Your Message Was Submitted Successfully", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      })
      .catch((error) => {
        toast.error("Something Went Wrong! Try Again Later", {
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
          <form name="contact-form" onSubmit={(e) => submitHandler(e)}>
            <div className="form-elem">
              <label htmlFor="name">Your Name</label>
              <br />
              <input
                type="text"
                id="name"
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
                required
                onChange={(e) => changeHandler(e)}
                onInvalid={(e) => invalid(e)}
              ></textarea>
            </div>
            <button>SEND</button>
            <div className="form-elem image-container">
              <img src="images/loading.gif" alt="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
