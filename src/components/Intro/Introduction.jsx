import React from "react";
import "./intro.css";

import myphoto from "./2.png";
import intropic from "./intro-pic.png";

const Introduction = () => {
  return (
    <div>
      <div className="section" id="intro">
        <div>
          <img src={intropic} alt="intro" className="camera_picture" />
        </div>
        <div className="intro">
          <img src={myphoto} alt="myphoto" className="myphoto" />
          <div className="introtext">
            <h1>
              Hello! <br /> Welcome to my page.
            </h1>
            <h4 className="smallerText">
              My name is Emilia Smith. <br /> I am a professional photographer.{" "}
              <br />
              Based in the US.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
