import React from "react";
import myself from "../assets/My project.png";

export default function About() {
  return (
    <>
      <div className="myself-img">
        <img alt="developer" src={myself} />
        <p>
          Hello. My name is Ellesse. I am a Juniour Web Developer from
          Birmingham. I enjoy learning how things work, fixing things that are
          broken and bringing code to life!
        </p>
      </div>
    </>
  );
}
