import React from "react";
import WorkImage1 from "../../static/assets/image/12.jpg";
import WorkImage2 from "../../static/assets/image/22.jpg";
import WorkImage3 from "../../static/assets/image/32.jpg";
import WorkImage4 from "../../static/assets/image/42.jpg";
import WorkImage5 from "../../static/assets/image/34.jpg";
import WorkImage6 from "../../static/assets/image/62.jpg";
import Mixitup from "../../components/Mixitup/Mixitup";

const HompageWorks = () => {
  const works = [
    {
      image: WorkImage1,
      filters: ["web", "ui"],
    },
    {
      image: WorkImage2,
      filters: ["tyre", "ux"],
    },
    {
      image: WorkImage3,
      filters: ["ui", "branding"],
    },
    {
      image: WorkImage4,
      filters: ["ux", "tyre"],
    },
    {
      image: WorkImage5,
      filters: ["branding", "ui"],
    },
    {
      image: WorkImage6,
      filters: ["tyre", "web"],
    },
  ];

  return (
    <>
      <Mixitup works={works} />
    </>
  );
};

export default HompageWorks;
