import React, { useState } from "react";
import Service from "../../components/Service/Service";
import ServiceImage1 from "../../static/assets/service/11.jpg";
import ServiceImage2 from "../../static/assets/service/21.jpg";
import ServiceImage3 from "../../static/assets/service/31.jpg";
import ServiceImage4 from "../../static/assets/service/41.jpg";
import ServiceImage5 from "../../static/assets/service/51.jpg";
import ServiceImage6 from "../../static/assets/service/61.jpg";
import PressureImage from "../../static/assets/service/pressure.png";
import PressureImageHover from "../../static/assets/service/pressure-hover.png";
import SuspensionImage from "../../static/assets/service/suspension.png";
import SuspensionImageHover from "../../static/assets/service/suspension-hover.png";
import WheelImage from "../../static/assets/service/wheel-alignment.png";
import WheelImageHover from "../../static/assets/service/wheel-alignment-hover.png";
import BrakeImage from "../../static/assets/service/brakes.png";
import BrakeImageHover from "../../static/assets/service/brakes-hover.png";
import BalancingImage from "../../static/assets/service/tyre-balancing.png";
import BalancingImageHover from "../../static/assets/service/tyre-balancing-hover.png";
import EngineImage from "../../static/assets/service/engine-oil.png";
import EngineImageHover from "../../static/assets/service/engine-oil-hover.png";

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
        "Tire pressure measures the amount of air in your tire, ensuring even wear and proper grip on the road.",
      aosDelay: "200",
      serviceUrl: "/services/pressure-check",
    },
    {
      serviceImage: ServiceImage2,
      serviceIconHover: SuspensionImageHover,
      serviceIcon: SuspensionImage,
      serviceTitle: "Suspension Service",
      serviceDescription:
        "A vehicle's performance, ride comfort, and safety are all directly influenced by the service suspension system.",
      aosDelay: "400",
      serviceUrl: "/services/suspension-service",
    },
    {
      serviceImage: ServiceImage3,
      serviceIconHover: WheelImageHover,
      serviceIcon: WheelImage,
      serviceTitle: "Wheel Alignment",
      serviceDescription:
        "A mechanical adjustment of your suspension system to ensure that your wheels are in th correct position. ",
      aosDelay: "600",
      serviceUrl: "/services/wheel-alignment",
    },
    {
      serviceImage: ServiceImage4,
      serviceIconHover: BrakeImageHover,
      serviceIcon: BrakeImage,
      serviceTitle: "Brake Service",
      serviceDescription:
        "Brake maintenance includes fluid replacement, pad and rotor changes, and adjustments to other braking systems.",
      aosDelay: "800",
      serviceUrl: "/services/brake-service",
    },
    {
      serviceImage: ServiceImage5,
      serviceIconHover: BalancingImageHover,
      serviceIcon: BalancingImage,
      serviceTitle: "Tyre Balancing",
      serviceDescription:
        "The process of distributing the assembly's weight evenly so that it spins smoothly and vibration-free.",
      aosDelay: "1000",
      serviceUrl: "/services/tyre-balancing",
    },
    {
      serviceImage: ServiceImage6,
      serviceIconHover: EngineImageHover,
      serviceIcon: EngineImage,
      serviceTitle: "Engine Oil Service",
      serviceDescription:
        "Engine oil acts as a lubricant to ensure that all of  these parts move smoothly by lowering friction.",
      aosDelay: "1200",
      serviceUrl: "/services/engine-oil-service",
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
          serviceUrl={service.serviceUrl}
          aosDelay={service.aosDelay}
        />
      ))}
    </div>
  );
};

export default HomepageService;
