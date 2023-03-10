import React from "react";
import myself from "../assets/My project.png";
import "../index.css";
import Social from "../components/SocialContent";

export default function About() {
  return (
    <>
      <div>
        <img alt="developer" src={myself} className="myself-img" />
        <p>
          Hello. My name is Ellesse. I am a Juniour Web Developer from
          Birmingham. I enjoy learning how things work, fixing things that are
          broken and bringing code to life!
        </p>
        <Social></Social>
      </div>
    </>
  );
}
