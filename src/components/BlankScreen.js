import React from "react";
import "./BlankScreen.css";
import { Link } from "react-router-dom";

function BlankScreen() {
  return (
    <div className="blankscreen">
      <h2>
        The requested site contains malicious activity. Go back to safety.
      </h2>
      <Link className="safety" to="/">
        OK
      </Link>
    </div>
  );
}

export default BlankScreen;
