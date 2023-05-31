import React from "react";

import "./button.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface ButtonMainProps {
  text: string;
}

const ButtonMain: React.FC<ButtonMainProps> = ({ text }) => {
  return (
    <div className="cmn-btn">
      <a className="banner-btn-left" href="sign-in.html">
        <i className="bx bxs-user-plus"></i>
        {text}
      </a>
    </div>
  );
};

export default ButtonMain;
