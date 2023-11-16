import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../components/Carousel/Carousel";
import CarouselImage1 from "../../static/assets/partner/apollo.png";
import CarouselImage2 from "../../static/assets/partner/arisun.png";
import CarouselImage3 from "../../static/assets/partner/vredestein.png";
import CarouselImage4 from "../../static/assets/partner/roadone.png";

const HomepagePartner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5, // Adjust this value as needed
    slidesToScroll: 1, // Adjust this value as needed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 500, // Set autoplay speed in milliseconds
  };

  const carouselImages = [
    CarouselImage1,
    CarouselImage2,
    CarouselImage3,
    CarouselImage4,
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-sm-nowrap flex-wrap ">
        {carouselImages.map((carouselImage, index) => (
          <Carousel
            key={index}
            classNameDiv="item"
            carouselImages={[carouselImage]}
          />
        ))}
      </div>
    </>
  );
};

export default HomepagePartner;
