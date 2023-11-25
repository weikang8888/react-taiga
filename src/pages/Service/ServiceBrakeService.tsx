import React, { useState } from "react";
import Slider from "react-slick";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../static/assets/about/about-taiga.png";
import "./service.css";
import Carousel from "../../components/Carousel/Carousel";
import ServiceDetail1 from "../../static/assets/service/service-details.jpg";
import ServiceDetail2 from "../../static/assets/service/service-details2.jpg";
import ServiceDetail3 from "../../static/assets/service/service-details3.jpg";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import MultiStepModal from "../../components/Modal/MultiStepModal";

const ServicePressureCheck = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Adjust this value as needed
    slidesToScroll: 1, // Adjust this value as needed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    arrows: false,
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const serviceDetail = [ServiceDetail1, ServiceDetail2, ServiceDetail3];
  return (
    <>
      <Loader />
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"Service Details"}
        bannerTarget={"Brake Service"}
        bannerPreviousTarget={"Service"}
        showChevron={true}
      />
      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="service-details-header">
              <h3>Brake Service</h3>
              {/* <Button text="Book Appointment" onClick={handleOpenModal} />
              {isModalOpen && (
                <MultiStepModal handleCloseModal={handleCloseModal} />
              )} */}
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="service-details-item">
                  <div className="service-details-img">
                    <div className="service-details-slider">
                      <Slider {...settings}>
                        {serviceDetail.map((serviceDetails, index) => (
                          <Carousel
                            key={index}
                            carouselImages={[serviceDetails]}
                          />
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <li className="mb-2">
                  One of your car's most crucial systems is the braking system.
                  Everyone wants to feel secure in the knowledge that their
                  brakes won't malfunction and that they will be able to stop
                  their car safely.
                </li>
                <li className="mb-2">
                  The following are some signs that your brakes need to be
                  inspected by our official store nearby.
                </li>
                <li className="service-benefit-column mb-2">
                  {" "}
                  <div className="tick-orange"></div>
                  When the brakes are applied, the vehicle pulls to one side or
                  the other
                </li>
                <li className="service-benefit-column mb-2">
                  {" "}
                  <div className="tick-orange"></div>
                  Brakes feel grindingly rigid
                </li>
                <li className="service-benefit-column mb-2">
                  {" "}
                  <div className="tick-orange"></div>
                  Brakes are reluctant to react
                </li>
                <li className="service-benefit-column mb-2">
                  {" "}
                  <div className="tick-orange"></div>
                  The dashboard's brake light is flashing red.
                </li>
              </div>
            </div>
            <div className="col-lg-12">
              <li className="service-benefit-column mb-2">
                <div className="tick-orange"></div>Your brake fluid will be
                checked for the proper level and moisture content during your
                routine maintenance appointment. To prevent brake performance
                from being affected by boiling brought on by water-saturated
                brake fluid, the brake fluid needs to be changed every couple of
                years.
              </li>
              <li className="service-benefit-column mb-2">
                <div className="tick-orange"></div>The vehicle slows down as a
                result of friction between the brake pad and brake rotor caused
                by the brake callipers pressing the brake pads against the
                rotor. Servicing the brake calliper, calliper pins, and sliders
                will prolong the lifespan of the brake pads and rotors in
                addition to keeping the brake system in your car operating at
                its best. All of the metals used in brake systems are
                susceptible to corrosion and rust. Regular maintenance will keep
                them clean and functioning as intended, allowing you to brake
                with confidence and enjoying a long brake pad life.
              </li>
              <li className="service-benefit-column mb-2">
                <div className="tick-orange"></div>The environment that brake
                rotors live in is quite hostile. The brake pad squeezes the
                rotor, causing friction that slows and ultimately stops the car.
                A brake rotor's lifespan can be shortened by high temperatures,
                inadequate cooling, and dragging brake pads. Make sure your
                car's brake system is regularly inspected and maintained to get
                the most life and performance out of it.
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePressureCheck;
