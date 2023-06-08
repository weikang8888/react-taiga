import React from "react";

const ServiceRight = () => {
  return (
    <div className="col-lg-3">
      <div className="service-details-item">
        <div className="service-details-left">
          <h3>Service List</h3>
          <ul>
            <li>
              <i className="bx bx-chevron-right"></i>
              <a href="#">Pressure Check Service</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
              <a href="#">Engine Service</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
              <a href="#">Tuning Service</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
              <a href="#">Motor Service</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
              <a href="#">System Service</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
              <a href="#">Washing Service</a>
            </li>
          </ul>
        </div>
        <div className="service-details-left service-details-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <i className="bx bx-location-plus"></i>
              28/A Street, New York City
            </li>
            <li>
              <i className="bx bx-phone-call"></i>
              <a href="tel:+880123456789">+88 0123 456 789</a>
            </li>
            <li>
              <i className="bx bx-mail-send"></i>
              <a href="/cdn-cgi/l/email-protection#452c2b232a0524302120262e6b262a28">
                <span
                  className="__cf_email__"
                  data-cfemail="83eaede5ecc3e2f6e7e6e0e8ade0ecee">
                  [email&#160;protected]
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceRight;
