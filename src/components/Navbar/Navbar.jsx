import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <a href="#intro">
          <p>HOME</p>
        </a>
        <a href="#about">
          <p>ABOUT</p>
        </a>
        <a href="#gallery">
          <p>GALLERY</p>
        </a>
        <a href="#contact">
          <p>CONTACT</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
