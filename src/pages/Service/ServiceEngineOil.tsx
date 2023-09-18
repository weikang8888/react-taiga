import React, { useState } from "react";
import Slider from "react-slick";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../static/assets/about/footer-car.png";
import "./service.css";
import Carousel from "../../components/Carousel/Carousel";
import ServiceDetail1 from "../../static/assets/service/service-details.jpg";
import ServiceDetail2 from "../../static/assets/service/service-details2.jpg";
import ServiceDetail3 from "../../static/assets/service/service-details3.jpg";
import ServiceRight from "./ServiceRight";
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <p className="service-benefit-column">
                <div className="tick-orange"></div>
                Fresh engine oil lubricates the moving parts of the engine,
                reducing friction and preventing wear and tear. This promotes
                the longevity and performance of the engine.
              </p>
              <p className="service-benefit-column">
                <div className="tick-orange"></div>
                Engine oil helps dissipate heat generated during engine
                operation, preventing overheating and potential engine damage.
              </p>
              <p className="service-benefit-column">
                <div className="tick-orange"></div>
                Clean engine oil reduces internal friction, contributing to
                improved fuel efficiency and lower operating costs.
              </p>
              <p className="service-benefit-column">
                <div className="tick-orange"></div> Regular oil changes maintain
                optimal engine performance, ensuring smooth acceleration and
                responsive power delivery.
              </p>
              <p className="service-benefit-column">
                <div className="tick-orange"></div> Engine oil service removes
                dirt, debris, and contaminants that accumulate in the oil over
                time, preventing harmful particles from circulating in the
                engine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePressureCheck;
