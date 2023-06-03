import React from "react";

interface CarouselOption {
  classsNameDiv: string;
  carouselImage: string;
}
const Carousel = ({ classsNameDiv, carouselImage }: CarouselOption) => {
  return (
    <div className="owl-carousel owl-theme">
      {/* Carousel item 1 */}
      <div className={classsNameDiv}>
        <img src={carouselImage} />
      </div>
    </div>
  );
};

export default Carousel;
