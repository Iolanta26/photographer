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
      </div>
    </div>
  );
};

export default Contact;
