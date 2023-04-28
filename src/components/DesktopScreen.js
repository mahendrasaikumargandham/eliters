import React from "react";
import torBrowser from "../images/tor.svg";
import "./DesktopScreen.css";
import tor from "../images/tor.svg";
import appstore from "../images/appstore.svg";
import safari from "../images/safari.svg";
import chrome from "../images/chrome.svg";
import { Link } from "react-router-dom";

function DesktopScreen() {
  return (
    <div className="desktopscreen">
      <div className="desktopicons">
        <img src={appstore} className="tor_icon" />
        <img src={safari} className="tor_icon" />
        <Link to="/chrome">
          <img src={tor} className="tor_icon" alt="torbrowser" />
        </Link>
        <Link to="/chrome">
          <img src={chrome} className="tor_icon" alt="torbrowser" />
        </Link>
      </div>
    </div>
  );
}

export default DesktopScreen;
