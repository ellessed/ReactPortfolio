import React from "react";
import "../index.css";
import Social from "../components/SocialContent";

function AboutMe() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Ellesse
          <br /> WEB DEVELOPER
        </div>
        <div className="about-photo">
          <img
            src={require("../assets/AvatarEllesse.png")}
            className="picture"
          />
        </div>
      </div>
      <Social />
    </div>
  );
}

export default AboutMe;
