import React from "react";

import "./button.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface ButtonMainProps {
  text: string;
  buttonDiv?: string;
  buttonA?: string;
}

const ButtonMain: React.FC<ButtonMainProps> = ({
  text,
  buttonDiv = "cmn-btn",
  buttonA = "banner-btn-left",
}) => {
  return (
    <div className={buttonDiv}>
      <a className={buttonA} href="sign-in.html">
        {text}
      </a>
    </div>
  );
};

export default ButtonMain;
