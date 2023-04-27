import React from "react";
import torBrowser from "../images/tor.png";
import "./DesktopScreen.css";
import tor from "../images/tor.svg";

function DesktopScreen() {
  return (
    <div className="desktopscreen">
      <div className="desktopicons">
        <img src={tor} className="tor_icon" alt="torbrowser" />
      </div>
    </div>
  );
}

export default DesktopScreen;
