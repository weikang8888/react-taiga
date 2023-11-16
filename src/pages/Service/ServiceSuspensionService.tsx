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
        bannerTarget={"Suspension Service"}
        bannerPreviousTarget={"Service"}
        showChevron={true}
      />
      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="service-details-header">
              <h3>Suspension Service</h3>
              <Button text="Book Appointment" onClick={handleOpenModal} />
              {isModalOpen && (
                <MultiStepModal handleCloseModal={handleCloseModal} />
              )}
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
                <p>
                  The service suspension system is an important component of a
                  car that improves ride comfort by preserving the ride height
                  as the car travels over bumps and uneven terrain.
                </p>
                <p>
                  The dashboard's "service suspension system" warning light
                  turns on when the vehicle's computer detects a problem with
                  the system.This might indicate that under heavy loads, the
                  rear suspension height may be lower than usual, or that there
                  is hose or other component damage.
                </p>
                <p>
                  Unusual ride roughness, difficulty steering, apparent vehicle
                  lean or sway in turns, nosediving when braking, and uneven
                  tire wear can all be signs of a bad suspension system.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <p>
                  <strong>Symptoms of a bad suspension system</strong>
                </p>
                <p>
                  <strong>Pulling to one side when driving:</strong>This symptom
                  denotes an unbalanced vehicle, which may be the result of a
                  suspension system issue. It might also point to a problem with
                  the wheels or tires.
                </p>
                <p>
                  <strong>Bumpy ride:</strong> : If your car's ride is rough or
                  bumpy, there may be a problem with the suspension. A
                  noticeable change in ride comfort could indicate a problem
                  because the suspension system is intended to smooth out bumps
                  and keep your ride smooth.
                </p>
                <p>
                  <strong>One corner sits lower than others:</strong> When
                  parked, if one corner of the car is lower than the other ones,
                  it may have a broken spring or other suspension parts.
                </p>
                <p>
                  <strong>Diving, Rolling or Squatting:</strong> Indicators of
                  worn-out shocks and struts include excessive diving during
                  braking, leaning (rolling) during turns, and rear-end
                  squatting during acceleration.
                </p>
                <p>
                  <strong>Difficulty Steering:</strong>The steering system,
                  which is closely related to the suspension, may have a problem
                  if steering becomes challenging, particularly during turns.
                </p>
                <p>
                  <strong>Excess Tyre Wear:</strong>Rapid or uneven tire wear
                  may be an indication of a faulty suspension system. This is
                  because a misaligned suspension may cause some tire components
                  to bear more weight than others, resulting in uneven tire
                  wear.
                </p>
                <p>
                  <strong>Leaking around shocks and struts:</strong>It is
                  obvious when there are leaks around the shocks and struts that
                  these suspension system parts are failing.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  <strong>How to fix the service suspension system:</strong>
                </p>
                <p>
                  <strong>Identify the problem:</strong>Finding the precise
                  problem behind the service suspension system warning is the
                  first step. A visual inspection, the use of diagnostic tools,
                  or taking the vehicle to a qualified mechanic for inspection
                  can all be used to accomplish this.
                </p>
                <p>
                  <strong>Replaced damaged components:</strong>The suspension
                  system's parts will need to be replaced if any of them are
                  harmed or worn out. This might refer to springs, struts,
                  shocks, or other suspension system components.
                </p>
                <p>
                  <strong>Fix leaks:</strong>Leaks in the hydraulic fluid or air
                  in the suspension system must be repaired or sealed, and any
                  leaking parts must be changed.
                </p>
                <p>
                  <strong>Repair or replace sensors:</strong>If the suspension
                  system's monitoring sensors are the source of the issue, they
                  may need to be repaired or replaced. Sometimes there may be a
                  problem with the wiring that connects the sensors to the
                  computer in the vehicle.
                </p>
                <p>
                  <strong>Software update or reset:</strong>The computer
                  software of the car might occasionally need to be updated or
                  reset. A qualified mechanic or the dealership should handle
                  this.
                </p>
                <p>
                  <strong>Adjust vehicle load:</strong>You must adjust the load
                  to stay within the vehicle's limits if carrying a load heavier
                  than the vehicle's capacity resulted in the service suspension
                  system warning.
                </p>
                <p>
                  <strong>Regular maintenance:</strong>Future suspension system
                  problems can be avoided with regular maintenance. This entails
                  routine tire pressure checks and maintenance, regular vehicle
                  maintenance, and taking care of any problems as soon as they
                  appear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePressureCheck;
