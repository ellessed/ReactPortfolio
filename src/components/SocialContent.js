import React from "react";
import { ConnectData } from "../data/Socials";
import "../index.css";
function Social() {
  const data = ConnectData;
  return (
    <div className="social-content">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Social;
