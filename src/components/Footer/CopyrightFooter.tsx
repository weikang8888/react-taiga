import React from "react";
import { Link } from "react-router-dom";

const CopyrightFooter = () => {
  return (
    <>
      <div className="copyright-area">
        <div className="row">
          <div className="col-lg-7">
            <div className="copyright-item">
              <p>
                Copyright @ 2023 Taiga. Designed By
                <Link to="https://www.kitarteliti.com.my/home/" target="_blank" className="px-1">
                  Kitar Teliti
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="copyright-item copyright-right">
              <ul>
                <li>
                  <Link to="/pages/term-conditions" target="_blank">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <span>-</span>
                </li>
                <li>
                  <Link to="/pages/privacy-policy" target="_blank">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyrightFooter;
