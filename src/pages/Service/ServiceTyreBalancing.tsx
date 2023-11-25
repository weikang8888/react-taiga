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
        bannerTarget={"Tyre Balancing"}
        bannerPreviousTarget={"Service"}
        showChevron={true}
      />
      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="service-details-header">
              <h3>Tyre Balancing</h3>
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
                <p>
                  At certain speeds, any imbalance in the wheel and tyre
                  assembly can cause vibrations in the suspension and vehicle
                  structure. Such vibrations not only make driving
                  uncomfortable, but they also hasten the wear of the vehicle's
                  suspension parts and the tread on your tires. Premature wear
                  raises costs because the tyre must be replaced before its
                  time.
                </p>
                <p>
                  By having your wheels balanced, you can prevent annoying
                  vibrations in your car and the premature expense of having to
                  replace the unevenly worn tyre.
                </p>
                <p>
                  A qualified technician will mounts your wheel and tire
                  assembly onto a tire balancing device during a tire balance
                  service. The wheel and tire assembly are spun by the machine
                  to gauge the degree of imbalance. The technician can install
                  the appropriate wheel weights to balance the wheel and tire
                  correctly using this information.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <li className="service-benefit-column mb-2">
                  <strong>Importance of tyre balancing:</strong>
                </li>
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div>A smoother ride
                </li>
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div>Less deterioration of the
                  tires
                </li>
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div> Reduces the load on the
                  drivetrain
                </li>
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div>Higher fuel efficiency
                </li>
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div>Fewer vibrations and noises
                </li>
              </div>
              <div className="col-lg-6">
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div>You should schedule a visit
                  with a qualified technician as soon as you notice any
                  indications that your tires need to be balanced. However,
                  generally speaking, you ought to have your car's tires
                  balanced and rotated every 5,000
                </li>
                <li className="service-benefit-column mb-2">
                  {" "}
                  <div className="tick-orange"></div>
                  As soon as you feel a vibration, you should have your vehicle
                  checked. Tires that are out of balance unfortunately can't be
                  fixed. The issue must be handled by a skilled technician.
                </li>
              </div>
              <div className="col-lg-3">
                <li className="service-benefit-column mb-2">
                  <strong> Perfect time for tyre balancing:</strong>
                </li>{" "}
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div>During tire rotation
                  service
                </li>{" "}
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div>During flat tire repair
                  services
                </li>{" "}
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div>During regularly scheduled
                  maintenance visits
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePressureCheck;
