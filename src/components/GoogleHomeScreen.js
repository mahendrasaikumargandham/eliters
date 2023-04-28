import React, { useState, useEffect } from "react";
import google from "../images/google.png";
import "./GoogleHomeScreen.css";

function GoogleHomeScreen() {
  const [malicious, setMalicious] = useState("");
  console.log(malicious);
  const handleMalicious = () => {
    if (malicious === "malicious") {
      window.location.href = "/blank";
    } else {
      window.location.href = "https://www.google.com/search?q=" + malicious;
    }
  };
  return (
    <div className="googleHomeScreen">
      <div className="googleMain">
        <img src={google} className="googleLogo" alt="" />
      </div>
      <input
        type="text"
        value={malicious}
        // onChange={(e) => setMalicious(e.target.value)}
        onChange={(event) => setMalicious(event.target.value)}
      />
      <div className="googleButtons">
        <button className="googleSearch" onClick={() => handleMalicious()}>
          Google Search
        </button>
        <button className="googleSearch">I'm Feeling Lucky</button>
      </div>
    </div>
  );
}

export default GoogleHomeScreen;
