import React from "react";

interface CarouselOption {
  carouselImages: string[];
}

const Carousel = ({ carouselImages }: CarouselOption) => {
  return (
    <div>
      {carouselImages.map((image, index) => (
        <img key={index} src={image} alt={`Carousel ${index}`} />
      ))}
    </div>
  );
};

export default Carousel;
