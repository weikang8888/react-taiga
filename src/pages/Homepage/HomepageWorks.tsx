import React, { useEffect, useRef, useState } from "react";
import mixitup from "mixitup";
import WorkImage1 from "../../assets/image/12.jpg";
import WorkImage2 from "../../assets/image/22.jpg";
import WorkImage3 from "../../assets/image/32.jpg";
import WorkImage4 from "../../assets/image/42.jpg";
import WorkImage5 from "../../assets/image/34.jpg";
import WorkImage6 from "../../assets/image/62.jpg";
import ButtonMain from "../../components/Button/Button";

const HompageWorks = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all"); // State variable for active filter
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

  useEffect(() => {
    const container = containerRef.current;
    const mixer = mixitup(container, {
      selectors: {
        control: ".filter",
      },
    });

    return () => {
      mixer.destroy();
    };
  }, []);

  return (
    <>
      <div className="sorting-menu">
        <ul>
          <li
            className={`filter ${activeFilter === "all" ? "active" : ""}`}
            data-filter="all"
            onClick={() => setActiveFilter("all")}>
            all
          </li>
          <li
            className={`filter ${activeFilter === "tyre" ? "active" : ""}`}
            data-filter=".tyre"
            onClick={() => setActiveFilter("tyre")}>
            wheels
          </li>
          <li
            className={`filter ${activeFilter === "web" ? "active" : ""}`}
            data-filter=".web"
            onClick={() => setActiveFilter("web")}>
            steering
          </li>
          <li
            className={`filter ${activeFilter === "ui" ? "active" : ""}`}
            data-filter=".ui"
            onClick={() => setActiveFilter("ui")}>
            brakes
          </li>
          <li
            className={`filter ${activeFilter === "ux" ? "active" : ""}`}
            data-filter=".ux"
            onClick={() => setActiveFilter("ux")}>
            suspension
          </li>
          <li
            className={`filter ${activeFilter === "branding" ? "active" : ""}`}
            data-filter=".branding"
            onClick={() => setActiveFilter("branding")}>
            tyre
          </li>
        </ul>
      </div>

      <div className="row" ref={containerRef}>
        {works.map((work, index) => (
          <div
            key={index}
            className={`col-sm-6 ${
              index === 2 || index === 4 ? "col-lg-6" : "col-lg-3"
            } mix ${work.filters.join(" ")}`}>
            <div className="work-item">
              <img src={work.image} alt="Work" />
              <ButtonMain text="Read More" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HompageWorks;
