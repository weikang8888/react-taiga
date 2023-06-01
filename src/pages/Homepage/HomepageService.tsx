import React from "react";
import Service from "../../components/Service/Service";
import ServiceImage1 from "../../assets/service/11.jpg";
import ServiceImage2 from "../../assets/service/21.jpg";
import ServiceImage3 from "../../assets/service/31.jpg";
import ServiceImage4 from "../../assets/service/41.jpg";
import ServiceImage5 from "../../assets/service/51.jpg";
import ServiceImage6 from "../../assets/service/61.jpg";
import PressureImage from "../../assets/service/pressure.png";
import SuspensionImage from "../../assets/service/suspension.png";
import WheelImage from "../../assets/service/wheel-alignment.png";
import BrakeImage from "../../assets/service/brakes.png";
import BalancingImage from "../../assets/service/tyre-balancing.png";
import EngineImage from "../../assets/service/engine-oil.png";

const HomepageService = () => {
  const services = [
    {
      serviceImage: ServiceImage1,
      serviceIcon: PressureImage,
      serviceTitle: "Pressure Check",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      serviceImage: ServiceImage2,
      serviceIcon: SuspensionImage,
      serviceTitle: "Suspension Service",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      serviceImage: ServiceImage3,
      serviceIcon: WheelImage,
      serviceTitle: "Wheel Alignment",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      serviceImage: ServiceImage4,
      serviceIcon: BrakeImage,
      serviceTitle: "Brake Service",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      serviceImage: ServiceImage5,
      serviceIcon: BalancingImage,
      serviceTitle: "Tyre Balancing",
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      serviceImage: ServiceImage6,
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
          key={index}
          serviceImage={service.serviceImage}
          serviceIcon={service.serviceIcon}
          serviceTitle={service.serviceTitle}
          serviceDescription={service.serviceDescription}
        />
      ))}
    </div>
  );
};

export default HomepageService;
