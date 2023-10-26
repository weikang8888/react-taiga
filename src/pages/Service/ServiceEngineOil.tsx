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
    speed: 500,
    slidesToShow: 1, // Adjust this value as needed
    slidesToScroll: 1, // Adjust this value as needed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set autoplay speed in milliseconds
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
        bannerTarget={"Engine Oil"}
        bannerPreviousTarget={"Service"}
        showChevron={true}
      />
      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="service-details-header">
              <h3>Engine Oil</h3>
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
                            classNameDiv="item"
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
                  Are you aware of the profound significance of engine oil in
                  sustaining the optimal performance of a car's engine? If not,
                  it is imperative to acquaint yourself with this vital
                  knowledge. Engine oil diligently nurtures the intricate
                  machinery within the engine, mitigating the deleterious
                  impacts of heat and the relentless deterioration of its
                  components. Moreover, it acts as a formidable safeguard
                  against the insidious forces of corrosion and rust, while
                  diligently moderating the engine's temperature. Additionally,
                  this precious elixir diligently purges any impurities from
                  fuel and eliminates the remnants of incomplete combustion,
                  thereby ensuring an immaculate engine operation.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <p className="service-benefit-column">
                  <strong>When to change your oil:</strong>
                </p>
                <p>
                  <strong>Problematic engine:</strong>Clean and highly
                  concentrated engine oil is essential for lubricating and
                  protecting the various metal parts in an engine. However, if
                  the oil becomes diluted or contaminated, it loses its ability
                  to lubricate effectively, leading to friction and a knocking
                  noise in the engine. Additionally, this can result in
                  overheating of the engine.
                </p>
                <p>
                  <strong>Smell of burning petrol:</strong>If you notice the
                  smell of petrol when you enter your car, it means there is an
                  issue with your engine. This could be caused by an oil leak or
                  engine overheating, which leads to the petrol burning in the
                  exhaust system. Consequently, you may see gray or bluish smoke
                  coming from the exhaust pipe. It is important to replace the
                  engine oil right away if you notice these signs to avoid any
                  major damage, including the risk of your engine catching fire.
                </p>{" "}
                <p>
                  <strong>Color of engine oil:</strong>Clean lubricating oil is
                  typically brown and clear, but it can become darker as it
                  collects dirt and debris from the engine's internal
                  combustion. To determine if an oil change is necessary, check
                  the oil level using the dipstick and if it is difficult to see
                  due to the oil's color, it is time for an oil change.
                </p>{" "}
                <p>
                  <strong>Engine warning light:</strong>If the blinking car
                  engine warning light appears on your dashboard, it means that
                  your car engine is running low on oil. In this situation,
                  promptly check the oil level and add more if needed. It is
                  advisable to bring your vehicle to a nearby workshop for a
                  thorough examination to avoid any potential major harm.
                </p>
                <p>
                  <strong>Increased fuel consumption:</strong>If a car consumes
                  more fuel, it may require a replacement of the engine oil
                  because the oil becomes less concentrated and puts strain on
                  the engine. As a result, the engine components have to work
                  harder, leading to increased fuel consumption.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  <strong>
                    How to pick the right engine oil for your car:
                  </strong>
                </p>
                <p>
                  <strong>Manufacturing model & series:</strong>To choose the
                  appropriate lubricating oil, it is important to first identify
                  the model and series of your car. Modern car models have
                  advanced engines designed to enhance efficiency during
                  driving. Consequently, the oils available in the market are
                  specifically formulated to cater to these newer engines.
                  Therefore, it is crucial to ensure that you select the oil
                  types that are compatible with your car's model and make.
                </p>
                <p>
                  <strong>Driving environment:</strong>It is important to
                  consider the environment and location when choosing the right
                  oil for your car. Different conditions can cause different
                  problems, so the frequency and distance of driving, as well as
                  the type of terrain, should be considered when determining
                  when to replace the oil. If the car is used frequently or
                  driven on rocky terrain, the oil should be replaced sooner.
                  However, even if the car is rarely used or driven on normal
                  roads, the oil still needs to be replaced according to the
                  service schedule to prevent engine damage.
                </p>{" "}
                <p>
                  <strong>Types of engine oil:</strong>There are different kinds
                  of engine oil available in the market, such as mineral,
                  semi-synthetic, and fully-synthetic oils. Each type has its
                  own pros and cons, so it's important to consider factors like
                  viscosity, temperature, sludge resistance, and durability
                  before making a decision.
                </p>{" "}
                <p>
                  <strong>Viscosity level:</strong>When looking at engine oils,
                  you might see a code on the packaging label that includes
                  numbers and letters. This code indicates the viscosity level
                  and durability of the oil. The viscosity level is determined
                  by two numbers.
                </p>
                <p className="service-benefit-column">
                  <div className="tick-orange"></div>The initial number with
                  the letter 'W' indicates how the oil flows during cold weather
                  or when the engine is first turned on.
                </p>
                <p className="service-benefit-column">
                  <div className="tick-orange"></div>The second digit
                  indicates how well the oil flows when the engine is at its
                  regular operating temperature.
                </p>
                <p>
                  <strong>Engine oil certification standards:</strong>
                  Different organizations have different acronyms for engine oil
                  certification standards, such as API, ACEA, ILSAC, and JASO.
                  These standards indicate that the oil meets or exceeds the
                  necessary requirements and ensure the performance and quality
                  of the product.
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
