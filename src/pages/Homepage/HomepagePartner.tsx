import React, { useEffect } from "react";

import $ from "jquery";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Carousel from "../../components/Carousel/Carousel";
import PartnerImage1 from "../../assets/partner/METRO-150x150.png";
import PartnerImage2 from "../../assets/partner/al-ghazi-150x150.png";
import PartnerImage3 from "../../assets/partner/SUPER-POWER-150x150.png";
import PartnerImage4 from "../../assets/partner/tez-raftar-150x150.png";
import PartnerImage5 from "../../assets/partner/YAMAHA-150x150.png";

const HomepagePartner = () => {
  const options = {
    autoplay: true,
    autoplayTimeout: 1000,
    smartSpeed: 100,
    margin: 25,
    dots: false,
    loop: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
      992: { items: 6 },
    },
  };

  useEffect(() => {
    // Initialize Owl Carousel once the component is mounted
    $(".owl-carousel").owlCarousel(options);
  }, []);

  const items = [
    PartnerImage1,
    PartnerImage2,
    PartnerImage3,
    PartnerImage4,
    PartnerImage5,
  ];

  return (
    <OwlCarousel options={options}>
      {items.map((item, index) => (
        <Carousel key={index} classsNameDiv="item" carouselImage={item} />
      ))}
    </OwlCarousel>
  );
};

export default HomepagePartner;
