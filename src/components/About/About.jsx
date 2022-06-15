import React from "react";
import "./about.css";

import pngImage from "./1.png";

const About = ({ view }) => {
  const styleText = {
    transform: `${view >= 580 ? "translateX(50px)" : "0"}`,
    opacity: `${view >= 580 ? "1" : "0"}`,
  };
  const styleImages = {
    transform: `${view >= 580 ? "translateX(-30px)" : "0"}`,
    opacity: `${view >= 580 ? "1" : "0"}`,
  };

  return (
    <div className="about" id="about">
      {/* Comment */}
      <div className="aboutContainer">
        <div class="text-container" style={styleText}>
          <div className="aboutWord">ABOUT</div>
          <div className="abouttext">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nesciunt quae ratione possimus quaerat eum, aspernatur
              culpa sed unde, eligendi, laudantium consequuntur dolores autem.
              Atque iure cumque explicabo eius. Quisquam ducimus adipisci
              tenetur minima fuga <br />
              <br />
              asperiores ipsa, perspiciatis eos blanditiis? Velit quibusdam
              facilis odit odio mollitia beatae ex aperiam magni earum
              accusantium quos natus, culpa sint amet voluptatem perspiciatis,
              dolores dolore labore ut vitae! Tempore, optio! Quam assumenda
              culpa tempore officiis perferendis. Aut dolore odio fugiat qu
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus distinctio quam nesciunt pariatur, temporibus
              sapiente non? Nostrum autem perferendis iusto, officia, distinctio
              sunt debitis nemo neque error animi odit laboriosam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, blan molestiae corporis
            </p>
          </div>
        </div>
        <img src={pngImage} alt="" className="pngImage" style={styleImages} />
      </div>
    </div>
  );
};

export default About;
