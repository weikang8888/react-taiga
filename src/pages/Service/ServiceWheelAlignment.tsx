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
        bannerTarget={"Wheel Alignment"}
        bannerPreviousTarget={"Service"}
        showChevron={true}
      />
      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="service-details-header">
              <h3>Wheel Alignment</h3>
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
                  Wheel alignments are crucial because out-of-alignment wheels
                  can result in problems like tires that wear out quickly or
                  unevenly, making driving less enjoyable.
                </p>
                <p>
                  <strong>Symptoms of a car out of alignment:</strong>
                </p>
                <ul>
                  <li className="service-benefit-column mb-2">
                    <div className="tick-orange"></div>Your car may pull
                    constantly to one side or the other, even when driving
                    straight. Additionally, your steering wheel may vibrate or
                    seem off-center when you are driving straight. However,
                    these issues might be happening for a number of different
                    reasons, so keep reading for more warning signs of alignment
                    problems.
                  </li>
                  <li className="service-benefit-column mb-2">
                    <div className="tick-orange"></div>When your car is stopped,
                    visually inspect the tread on your tires to look for
                    alignment issues. Different alignment issues are indicated
                    by different areas of the tire that are more "worn-down"
                    than others or by a difference in tread depth from the
                    inside to the outside edge of the tire.
                  </li>
                  <li className="service-benefit-column mb-2">
                    <div className="tick-orange"></div>Misaligned wheels can
                    cause tires to screech in circumstances where they normally
                    wouldn't, so you might even be able to hear an alignment
                    problem.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <ul>
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div>How frequently you should
                  align your car's wheels isn't predetermined; it all depends on
                  your typical driving circumstances and routines. Many
                  mechanics advise having your car's alignment checked after
                  every service. However, if you frequently drive on rough roads
                  or log more miles than average, you might want to consider
                  getting an alignment more frequently. There is no such thing
                  as too many alignments in the mechanical sense.
                </li>
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div>Regardless of when your
                  last alignment was performed, you should realign your vehicle
                  after replacing the tires, any steering or suspension system
                  components, or after a driving incident like a collision or a
                  particularly hard blow to the steering wheel.
                </li>
                <li className="service-benefit-column mb-2">
                  <div className="tick-orange"></div>Wheel alignments are
                  crucial because misaligned wheels can negatively impact your
                  driving or riding experience and result in problems like tires
                  that wear out too quickly or unevenly.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePressureCheck;
