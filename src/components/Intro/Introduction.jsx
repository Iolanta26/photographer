import React from "react";
import "./intro.css";

import myphoto from "./myphoto.jpg";

const Introduction = () => {
  return (
    <div>
      <div className="section" id="intro">
        <div className="intro">
          <img src={myphoto} alt="myphoto" className="myphoto" />
          <div className="introtext">
            <h1>
              Hello! <br /> Welcome to my page.
            </h1>
            <h4 className="smallerText">
              My name is Emilia Smith. <br /> I am a professional photographer
              working in the US.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
