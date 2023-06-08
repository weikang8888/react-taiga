import React from "react";

import "./banner.css";
interface BannerOption {
  bannerImage: string;
  bannerTitle: string;
  bannerTarget: string;
  bannerPreviousTarget: string;
  showChevron: boolean;
}
const Banner = ({
  bannerImage,
  bannerTitle,
  bannerTarget,
  bannerPreviousTarget,
  showChevron,
}: BannerOption) => {
  return (
    <>
      <div className="page-title-area">
        <img src={bannerImage} alt="Title" />
        <div className="container">
          <div className="page-title-content">
            <h2>{bannerTitle}</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>
              </li>

              <li>
                <a href="/">{bannerPreviousTarget}</a>
              </li>
              {showChevron && (
                <>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                  </li>
                </>
              )}
              <li>{bannerTarget}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
