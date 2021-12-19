import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <a href="#intro">
          <p>Home</p>
        </a>
        <a href="#about">
          <p>About</p>
        </a>
        <a href="#gallery">
          <p>Gallery</p>
        </a>
        <a href="#contact">
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
