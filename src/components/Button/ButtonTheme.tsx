import React, { useState } from "react";
import "./buttonTheme.css";

const ButtonTheme = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      // Set dark theme
      document.body.classList.add("theme-dark");
    } else {
      // Remove dark theme
      document.body.classList.remove("theme-dark");
    }
  };

  return (
    <>
      <div className="switch-box">
        <label htmlFor="slider" className="switch">
          <input
            type="checkbox"
            id="slider"
            checked={isChecked}
            onChange={handleChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default ButtonTheme;
