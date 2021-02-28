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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", objToSend }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };
  // document.querySelector(".form-section form button").style.background =
  //   "green";
  // toast.success("Your Message Was Submitted Successfully", {
  //   position: toast.POSITION.BOTTOM_CENTER,
  // });

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
            name="contact-form"
            method="POST"
            data-netlify="true"
            onSubmit={(e) => submitHandler(e)}
          >
            <input type="hidden" name="form-name" value="contact-form" />
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
