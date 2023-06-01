import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

interface ServiceProps {
  serviceImage: string;
  serviceIcon: string;
  serviceTitle: string;
  serviceDescription: string;
}

const Service: React.FC<ServiceProps> = ({
  serviceTitle,
  serviceDescription,
  serviceIcon,
  serviceImage,
}) => {
  return (
    <div className="col-sm-6 col-lg-4">
      <a href="service-details.html">
        <div className="service-item">
          <div className="service-img">
            <img src={serviceImage} alt="Service" />
          </div>
          <div className="service-content">
            <img src={serviceIcon} alt="Service Icon" />
            <img src={serviceIcon} className="service-icon" alt="Service Icon" />
            <h3>{serviceTitle}</h3>
            <p>{serviceDescription}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Service;
