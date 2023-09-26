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
  buttonDiv,
  buttonA,
  onClick,
}) => {
  return (
    <a href={buttonUrl} className={`cmn-btn ${buttonDiv}`}>
      <button
        type="button"
        className={`banner-btn-left ${buttonA}`}
        onClick={onClick}>
        {text}
      </button>
    </a>
  );
};

export default ButtonMain;
