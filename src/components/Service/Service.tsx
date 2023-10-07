import React from "react";
interface ServiceProps {
  serviceImage: string;
  serviceIcon: string;
  serviceTitle: string;
  serviceDescription: string;
  serviceUrl: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  aosDelay: string;
}

const Service: React.FC<ServiceProps> = ({
  serviceTitle,
  serviceDescription,
  serviceIcon,
  serviceImage,
  serviceUrl,
  onMouseEnter,
  onMouseLeave,
  aosDelay,
}) => {
  return (
    <div
      className="col-sm-6 col-lg-4"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay={aosDelay}
      data-aos-once="true">
      <a href={serviceUrl}>
        <div className="service-item">
          <div className="service-img">
            <img src={serviceImage} alt="Service" />
          </div>
          <div className="service-content">
            <img src={serviceIcon} alt="Service Icon" />
            <img
              src={serviceIcon}
              className="service-icon"
              alt="Service Icon"
            />
            <h3>{serviceTitle}</h3>
            <p>{serviceDescription}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Service;
