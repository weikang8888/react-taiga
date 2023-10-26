import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    // Update the overflow property of the body element based on isModalOpen state
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";

    // Cleanup function to reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const serviceDetail = [ServiceDetail1, ServiceDetail2, ServiceDetail3];
  return (
    <>
      <Loader />
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"Service Details"}
        bannerTarget={"Pressure Check"}
        bannerPreviousTarget={"Service"}
        showChevron={true}
      />
      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="service-details-header">
              <h3>Pressure Check</h3>
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
                {" "}
                <p>
                  The inflation pressure of the tires must be checked frequently
                  because it directly affects safety and proper upkeep can
                  extend the life of the tires.
                </p>
                <p>
                  Regularly checking your tyre pressure is crucial because tires
                  naturally lose some air. Without it, you run the risk of
                  losing traction and extending your stopping distances.
                  Additionally, you risk damaging your tires, reducing their
                  lifespan, and using more fuel.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <p>
                  <strong>
                    Why is it important to check the tyre pressure? It is
                    important to check the tyre pressure regularly for a number
                    of reasons:
                  </strong>
                </p>
                <p>
                  <strong>Safety:</strong> Having properly inflated tires
                  enhances steering and driving while lowering the possibility
                  of blowouts and accidents.
                </p>
                <p>
                  <strong>Tyre wear:</strong> Under-inflated tires can lead to
                  uneven wear and tear, shorter life, and other problems.
                </p>
                <p>
                  <strong>Comfort:</strong> Having properly inflated tires can
                  give the driver smoother rides, lower vibrations, and a more
                  comfortable driving experience.
                </p>
                <p>
                  <strong>Fuel economy:</strong> Low tire pressure can increase
                  the rotating resistance, which lowers fuel economy and raises
                  fuel consumption.
                </p>
                <p>
                  <strong>Cost-effective:</strong>Proper tire pressure
                  maintenance can help extend tire life and reduce fuel costs.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  <strong>
                    To check the pressure of your tyres, you can use either an
                    automatic air compressor or a tyre pressure gauge. To check
                    the tyre pressure, you need to:
                  </strong>
                </p>
                <p className="service-benefit-column">
                  <div className="tick-orange"></div> Check the tyre placard or
                  the owner's manual for the correct tyre pressures for your
                  car.
                </p>
                <p className="service-benefit-column">
                  <div className="tick-orange"></div> Unscrew the cap on the air
                  valve of your tyre.
                </p>
                <p className="service-benefit-column">
                  <div className="tick-orange"></div> Push your tyre pressure
                  gauge firmly onto the tyre valve.
                </p>
                <p className="service-benefit-column">
                  <div className="tick-orange"></div> Remove the valve cap from
                  one of your tires.
                </p>
                <p className="service-benefit-column">
                  <div className="tick-orange"></div> Place the pressure gauge
                  on the valve stem and press down hard enough so the hiss sound
                  disappears and your gauge provides a reading.
                </p>
                <p className="service-benefit-column">
                  <div className="tick-orange"></div> With a standard gauge, the
                  air pressure will push a small bar out from the bottom of the
                  gauge. Your vehicle handbook will tell you what pressure you
                  should have in your tyres.
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
