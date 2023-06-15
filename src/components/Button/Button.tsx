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
      <a className={buttonA} onClick={onClick}>
        {text}
      </a>
    </div>
  );
};

export default ButtonMain;
