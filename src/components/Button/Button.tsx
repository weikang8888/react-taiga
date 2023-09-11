import React from "react";
import "./button.css";

interface ButtonMainProps {
  text: string;
  buttonDiv?: string;
  buttonA?: string;
  buttonUrl?: string;
  onClick?: () => void;
}

const ButtonMain: React.FC<ButtonMainProps> = ({
  text,
  buttonUrl,
  buttonDiv = "cmn-btn",
  buttonA = "banner-btn-left",
  onClick,
}) => {
  return (
    <a className={buttonDiv}>
      <button type="submit" className={buttonA} onClick={onClick}>
        {text}
      </button>
    </a>
  );
};

export default ButtonMain;
