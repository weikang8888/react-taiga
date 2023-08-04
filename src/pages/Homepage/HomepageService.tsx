import React, { useState } from "react";
import Service from "../../components/Service/Service";
import ServiceImage1 from "../../assets/service/11.jpg";
import ServiceImage2 from "../../assets/service/21.jpg";
import ServiceImage3 from "../../assets/service/31.jpg";
import ServiceImage4 from "../../assets/service/41.jpg";
import ServiceImage5 from "../../assets/service/51.jpg";
import ServiceImage6 from "../../assets/service/61.jpg";
import PressureImage from "../../assets/service/pressure.png";
import PressureImageHover from "../../assets/service/pressure-hover.png";
import SuspensionImage from "../../assets/service/suspension.png";
import SuspensionImageHover from "../../assets/service/suspension-hover.png";
import WheelImage from "../../assets/service/wheel-alignment.png";
import WheelImageHover from "../../assets/service/wheel-alignment-hover.png";
import BrakeImage from "../../assets/service/brakes.png";
import BrakeImageHover from "../../assets/service/brakes-hover.png";
import BalancingImage from "../../assets/service/tyre-balancing.png";
import BalancingImageHover from "../../assets/service/tyre-balancing-hover.png";
import EngineImage from "../../assets/service/engine-oil.png";
import EngineImageHover from "../../assets/service/engine-oil-hover.png";

const HomepageService = () => {
  const [hoverImage, setHoverImage] = useState(null);

  const handleMouseEnter = (hoverImage) => {
    setHoverImage(hoverImage);
  };

  const handleMouseLeave = (originalImage) => {
    setHoverImage(originalImage);
  };

  const services = [
    {
      serviceImage: ServiceImage1,
      serviceIconHover: PressureImageHover,
      serviceIcon: PressureImage,
      serviceTitle: "Pressure Check",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      serviceImage: ServiceImage2,
      serviceIconHover: SuspensionImageHover,
      serviceIcon: SuspensionImage,
      serviceTitle: "Suspension Service",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      serviceImage: ServiceImage3,
      serviceIconHover: WheelImageHover,
      serviceIcon: WheelImage,
      serviceTitle: "Wheel Alignment",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      serviceImage: ServiceImage4,
      serviceIconHover: BrakeImageHover,
      serviceIcon: BrakeImage,
      serviceTitle: "Brake Service",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      serviceImage: ServiceImage5,
      serviceIconHover: BalancingImageHover,
      serviceIcon: BalancingImage,
      serviceTitle: "Tyre Balancing",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      serviceImage: ServiceImage6,
      serviceIconHover: EngineImageHover,
      serviceIcon: EngineImage,
      serviceTitle: "Engine Oil Service",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
  ];

  return (
    <div className="row">
      {services.map((service, index) => (
        <Service
          onMouseEnter={() => handleMouseEnter(service.serviceIconHover)}
          onMouseLeave={() => handleMouseLeave(service.serviceIcon)}
          key={index}
          serviceImage={service.serviceImage}
          serviceIcon={
            hoverImage === service.serviceIconHover
              ? service.serviceIconHover
              : service.serviceIcon
          }
          serviceTitle={service.serviceTitle}
          serviceDescription={service.serviceDescription}
          hoverImage={""}
        />
      ))}
    </div>
  );
};

export default HomepageService;
