import React, { useEffect, useRef, useState } from "react";
import mixitup from "mixitup";
import ButtonMain from "../Button/Button";

interface MixitupOption {
  works: any;
}
const Mixitup = ({ works }: MixitupOption) => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all"); // State variable for active filter

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

      <div className="container">
        <div className="row" ref={containerRef}>
          {works.map((work, index) => (
            <div
              key={index}
              className={`col-sm-6 ${
                index === 2 || index === 4 ? "col-lg-6" : "col-lg-3"
              } mix ${work.filters.join(" ")}`}>
              <div className="work-item">
                <img src={work.image} alt="Work" />
                <ButtonMain text="Read More" buttonUrl={""} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mixitup;
