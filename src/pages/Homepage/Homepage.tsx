import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HompageWorks from "./HomepageWorks";
import HomepagePartner from "./HomepagePartner";
import TitleSection from "../../components/TitleSection/TitleSection";
import HomepageService from "./HomepageService";
import ButtonMain from "../../components/Button/Button";
import CarouselBg from "../../static/assets/image/carousel-bg-2.jpg";
import CarShadow from "../../static/assets/image/car-shadow.png";
import ProcessTyre from "../../static/assets/image/tyre.png";
import BannerTyre from "../../static/assets/image/banner-black-tyre.png";
import QualityShape from "../../static/assets/image/quality-shape.png";
import QualityCar from "../../static/assets/image/quality-car.png";
import FeatureImage from "../../static/assets/image/feature-bg.jpg";
import FeatureShape from "../../static/assets/image/feature-shape.png";
import "./homepage.css";
import Loader from "../../components/Loader/Loader";
import HomepageProducts from "./HomepageProducts";

AOS.init();

const Homepage = () => {
  return (
    <>
      <Loader />
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
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img
                        className="img-fluid"
                        src={BannerTyre}
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
                        Qualified Tyre Maintenance Center
                      </h1>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img
                        className="img-fluid"
                        src={BannerTyre}
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
      <section className="process-area pt-100 pb-70">
        <div className="process-shape">
          <img src={CarShadow} alt="Shape" />
        </div>
        <TitleSection
          subtitle="process"
          title={"Our Working Process"}
          description={""}
        />
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4"
              data-aos="fade-right"
              data-aos-duration="2000">
              <div className="process-item">
                <div className="process-inner process-one">
                  <i className="bx bxs-car-mechanic"></i>
                  <h3>Identify Problems</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="process-inner">
                  <i className="bx bxs-car-garage"></i>
                  <h3>Start Servicing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="process-item">
                <div className="process-img">
                  <img
                    src={ProcessTyre}
                    alt="Process"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-left"
              data-aos-duration="2000">
              <div className="process-item">
                <div className="process-inner process-two">
                  <i className="bx bxs-car-crash"></i>
                  <h3>Trial For Make Sure</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="process-inner process-three">
                  <i className="bx bxs-car-wash"></i>
                  <h3>Deliver Service</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-70">
        <div className="container">
          <TitleSection
            subtitle="service"
            title="Our Services"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <HomepageService />
        </div>
      </section>
      <section className="quality-area">
        <div className="quality-img">
          <img src={QualityShape} alt="Quality" />
          <img src={QualityShape} alt="Quality" />
          <img
            src={QualityCar}
            alt="Quality"
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
        </div>
        <div className="container">
          <div className="quality-content">
            <div className="section-title">
              <h2 data-aos="fade-right" data-aos-duration="2000">
                Quality Work is Our First Priority
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
            <ButtonMain text="Read More" />
            <img src={ProcessTyre} alt="Quality" />
          </div>
        </div>
      </section>
      <section className="work-area pt-100 pb-70">
        <div className="container">
          <TitleSection
            subtitle="works"
            title="Latest Works For Clients"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <HompageWorks />
        </div>
      </section>
      <div className="feature-area">
        <div className="feature-shape">
          <img src={FeatureShape} alt="Feature" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="feature-img">
                <img src={FeatureImage} alt="Feature" />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="feature-content">
                <h2 data-aos="fade-left" data-aos-duration="1000">
                  Our Features
                </h2>
                <ul>
                  <li
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200">
                    <i className="bx bx-box"></i>
                    <h3>Trusted & Quality Work</h3>
                    <p>
                      Lorem ipsum the dolor sit amet, consectetur adising elit,
                      sed do.the dolor sit amet, consectetur
                    </p>
                  </li>
                  <li
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="400">
                    <i className="bx bxs-truck"></i>
                    <h3>Fast Service Delivery</h3>
                    <p>
                      Lorem ipsum the dolor sit amet, consectetur adising elit,
                      sed do.the dolor sit amet, consectetur
                    </p>
                  </li>
                  <li
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="600">
                    <i className="bx bx-money"></i>
                    <h3>Money Back Garanty</h3>
                    <p>
                      Lorem ipsum the dolor sit amet, consectetur adising elit,
                      sed do.the dolor sit amet, consectetur
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomepageProducts />

      <section className="our-partner pt-5">
        <div className="container">
          <TitleSection
            subtitle={"partner"}
            title={"Our Partner"}
            description={""}
          />
          <HomepagePartner />
        </div>
      </section>
    </>
  );
};

export default Homepage;
