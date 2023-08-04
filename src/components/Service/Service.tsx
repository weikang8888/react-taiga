import React from "react";
interface ServiceProps {
  serviceImage: string;
  serviceIcon: string;
  serviceTitle: string;
  serviceDescription: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hoverImage: string | null; // Add hoverImage prop
}

const Service: React.FC<ServiceProps> = ({
  serviceTitle,
  serviceDescription,
  serviceIcon,
  serviceImage,
  onMouseEnter,
  onMouseLeave,
  hoverImage, // Destructure hoverImage from props
}) => {
  return (
    <div
      className="col-sm-6 col-lg-4"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <a href="service-details.html">
        <div className="service-item">
          <div className="service-img">
            <img src={hoverImage ? serviceIcon : serviceImage} alt="Service" />
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
