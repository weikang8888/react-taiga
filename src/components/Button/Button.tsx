import React from "react";
import "./button.css";

interface ButtonMainProps {
  text: string;
  buttonDiv?: string;
  buttonA?: string;
  onClick?: () => void;
}

const ButtonMain: React.FC<ButtonMainProps> = ({
  text,
  buttonDiv = "cmn-btn",
  buttonA = "banner-btn-left",
  onClick,
}) => {
  return (
    <div className={buttonDiv}>
      <button type="submit" className={buttonA} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default ButtonMain;
