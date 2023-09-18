import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../components/Carousel/Carousel";
import CarouselImage1 from "../../static/assets/partner/al-ghazi-150x150.png";
import CarouselImage2 from "../../static/assets/partner/METRO-150x150.png";
import CarouselImage3 from "../../static/assets/partner/SUPER-POWER-150x150.png";
import CarouselImage4 from "../../static/assets/partner/tez-raftar-150x150.png";
import CarouselImage5 from "../../static/assets/partner/YAMAHA-150x150.png";
import CarouselImage6 from "../../static/assets/partner/SUPER-POWER-150x150.png";

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
    CarouselImage5,
    CarouselImage6,
  ];

  return (
    <>
      <Slider {...settings}>
        {carouselImages.map((carouselImage, index) => (
          <Carousel
            key={index}
            classNameDiv="item"
            carouselImages={[carouselImage]}
          />
        ))}
      </Slider>
    </>
  );
};

export default HomepagePartner;
