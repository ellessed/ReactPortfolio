import React from "react";
import myself from "../assets/AvatarEllesse.png";

const AboutMe = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <h1>About Me</h1>
          <div className="about">
            <div className="bio">
              <p>
                Welcome to my portfolio page! My name is Ellesse and I am a
                junior software developer with a passion for creating innovative
                and impactful solutions through code. I am excited to showcase
                my skills, experience, and projects to demonstrate my
                proficiency in various programming languages, tools, and
                technologies. As a junior developer, I am constantly seeking to
                learn and improve my craft, and this portfolio is a reflection
                of my dedication to honing my skills. My goal is to contribute
                to the development of meaningful applications that make a
                positive difference in people's lives. In this portfolio, you
                will find examples of my work, ranging from personal projects to
                team collaborations. Each project demonstrates my
                problem-solving abilities, creativity, and attention to detail.
                I am confident that my portfolio will illustrate my potential as
                a valuable addition to any software development team. Thank you
                for visiting my page, and I hope you enjoy exploring my work!
              </p>
            </div>
            <div style={{ width: "30%" }}>
              <img
                className="myself-image"
                alt="this is a picture of myself the developer"
                src={myself}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
