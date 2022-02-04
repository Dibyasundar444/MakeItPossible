import React, { useState } from "react";
import "./styles/toggle.css";

export default function Toggle({ darkMode, setDarkMode }) {
  return (
    <div className="container">
      <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
      <div className="switch-checkbox">
        <label className="switch">
          <input type="checkbox" onChange={setDarkMode} />
          <span className="slider round"> </span>
        </label>
      </div>
      <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
    </div>
  );
}
