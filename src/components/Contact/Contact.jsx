import React from "react";
import "./contact.css";

import background from "./background.svg";

const Contact = ({ view }) => {
  const style = {
    opacity: `${view >= 1750 ? "1" : "0"}`,
    // transform: `${view >= 1750 ? "translateY(-25%)" : "0"}`,
  };

  return (
    <div className="contact" id="contact">
      <div style={style} className="contactContainer">
        <img src={background} alt="background" className="back" />
        <div className="contact-info-wrapper">
          <h1 className="contactMe">Contact me</h1>
          <div className="contactText">
            For further inquiries, you can reach me via:
            <br />
            email :<span>emilia.smith@example.com</span>
            <br />
            phone: <span>+123394894809</span>
          </div>
          <div className="mytext">
            <h5>
              This project is made using React Js by Iolanta Scheifel. <br />{" "}
              All photos are taken from Unsplash. <br /> The photographer is
              fictional. <br />
              You can find a code on
              <a
                href="https://github.com/Iolanta26/photographer"
                target="_blank"
                rel="noreferrer"
                className="github"
              >
                <p>Github</p>
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
