import React, { useState } from "react";

import Header from "../../components/Header/Header";
import CarouselBg from "../../assets/image/carousel-bg-2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  return (
    <>
      <Header style={{ background: "transparent", top: "30px" }} />
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100 h-100"
                src={CarouselBg}
                alt="website template image"
              />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                        // Tyre Servicing //
                      </h6>
                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                        Qualified Tyre Repair Service Center
                      </h1>
                      <div className="cmn-btn">
                        <a className="banner-btn-left" href="sign-in.html">
                          <i className="bx bxs-user-plus"></i>
                          Learn More
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img
                        className="img-fluid"
                        src="static/picture/banner-black-tyre.png"
                        alt="website template image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100 h-100"
                src="static/image/carousel-bg-2.jpg"
                alt="website template image"
              />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                        // Tyre Servicing //
                      </h6>
                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                        Qualified Tyre Wash Service Center
                      </h1>
                      <div className="cmn-btn">
                        <a className="banner-btn-left" href="sign-in.html">
                          <i className="bx bxs-user-plus"></i>
                          Learn More
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img
                        className="img-fluid"
                        src="static/picture/banner-black-tyre.png"
                        alt="website template image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
