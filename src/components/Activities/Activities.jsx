import React from "react";
import "./Activities.scss";

const Activities = () => {
  return (
    <div className="Activities">
      <div className="icon-container">
        <i className="fas fa-utensils"></i>
        <h3 data-text="EAT" className="animate-EAT">
          EAT
        </h3>
      </div>
      <div className="icon-container">
        {" "}
        <i className="fas fa-bed"></i>
        <h3 data-text="SLEEP" className="animate-SLEEP">
          SLEEP
        </h3>
      </div>
      <div className="icon-container">
        {" "}
        <i className="fas fa-code"></i>
        <h3 data-text="CODE" className="animate-CODE">
          CODE
        </h3>
      </div>
      <div className="icon-container">
        <i className="fas fa-basketball-ball"></i>
        <h3 data-text="BASKETBALL" className="animate-BASKETBALL">
          BASKETBALL
        </h3>
      </div>
      <div className="icon-container">
        {" "}
        <i className="fas fa-redo-alt"></i>
        <h3 data-text="REPEAT" className="animate-REPEAT">
          REPEAT
        </h3>
      </div>
    </div>
  );
};

export default Activities;
