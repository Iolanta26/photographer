import React from "react";
import "./about.css";

import pngImage from "./1.png";

const About = ({ view }) => {
  const styleText = {
    transform: `${view >= 580 ? "translateX(20%)" : "0"}`,
    opacity: `${view >= 580 ? "1" : "0"}`,
  };
  const styleImages = {
    transform: `${view >= 580 ? "translateX(-25%)" : "0"}`,
    opacity: `${view >= 580 ? "1" : "0"}`,
  };

  return (
    <div className="about" id="about">
      {/* Comment */}
      <img src={pngImage} alt="" className="pngImage" style={styleImages} />
      <div className="aboutContainer" style={styleText}>
        <div className="aboutWord">
          <h1>ABOUT</h1>
        </div>
        <div className="abouttext">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            nesciunt quae ratione possimus quaerat eum, aspernatur culpa sed
            unde, eligendi, laudantium consequuntur dolores autem. Atque iure
            cumque explicabo eius. Quisquam ducimus adipisci tenetur minima fuga{" "}
            <br />
            <br />
            asperiores ipsa, perspiciatis eos blanditiis? Velit quibusdam
            facilis odit odio mollitia beatae ex aperiam magni earum accusantium
            quos natus, culpa sint amet voluptatem perspiciatis, dolores dolore
            labore ut vitae! Tempore, optio! Quam assumenda culpa tempore
            officiis perferendis. Aut dolore odio fugiat quidem, unde ut sint
            nulla, perspiciatis rerum ab adipisci esse. Pariatur, minima natus
            deserunt tempora iusto doloremque ipsum possimus, commodi
            asperiores, ut quis error!
          </p>{" "}
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus distinctio quam nesciunt pariatur, temporibus sapiente
            non? Nostrum autem perferendis iusto, officia, distinctio sunt
            debitis nemo neque error animi odit laboriosam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            blanditiis tenetur sit optio magni similique officiis, consectetur
            fuga vitae, laudantium deleniti culpa aut molestiae corporis
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
