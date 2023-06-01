import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./titlesection.css";

interface TitleSectionProps {
  subtitle: string;
  title: string;
  description: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <div className="section-title">
      <span className="sub-title">{subtitle}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TitleSection;
