import React from "react";

interface CarouselOption {
  classNameDiv: string;
  carouselImages: string[];
}

const Carousel = ({ classNameDiv, carouselImages }: CarouselOption) => {
  return (
    <div className={classNameDiv}>
      {carouselImages.map((image, index) => (
        <img key={index} src={image} alt={`Carousel ${index}`} />
      ))}
    </div>
  );
};

export default Carousel;
