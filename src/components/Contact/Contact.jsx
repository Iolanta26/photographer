import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div>
        <h1 className="contactMe">Contact me</h1>
        <p className="contactText">
          For further inquiries, you can reach me via:
          <br />
          email :<span>emilia.smith@example.com</span>
          <br />
          phone: <span>+123394894809</span>
        </p>
        <div className="mytext">
          <p>
            This project is made using React Js by Iolanta Scheifel. <br /> All
            photos are taken from Unsplash. The photographer is fictional.{" "}
            <br />
            You can find a code on
            <a
              href="https://github.com/Iolanta26/photographer"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <p>Github</p>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
