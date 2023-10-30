import React, { useEffect, useRef, useState } from "react";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../static/assets/about/about-taiga.png";
import AboutCarImage from "../../static/assets/about/about-car.jpg";
import CarShape from "../../static/assets/about/car-shape.png";
import Icon1 from "../../static/assets/icon/like.png";
import Icon1Hover from "../../static/assets/icon/like-hover.png";
import Icon2 from "../../static/assets/icon/customer-support.png";
import Icon2Hover from "../../static/assets/icon/customer-support-hover.png";
import Icon3 from "../../static/assets/icon/google-maps.png";
import Icon3Hover from "../../static/assets/icon/google-maps-hover.png";
import Icon4 from "../../static/assets/icon/add-friend.png";
import Icon4Hover from "../../static/assets/icon/add-friend-hover.png";
import Icon5 from "../../static/assets/icon/truck.png";
import Icon5Hover from "../../static/assets/icon/truck-hover.png";
import Icon6 from "../../static/assets/icon/dollar-symbol.png";
import Icon6Hover from "../../static/assets/icon/dollar-symbol-hover.png";
import CountUp from "react-countup";

import "./about.css";
import Loader from "../../components/Loader/Loader";
import PopoverVideo from "../../components/Popover/PopoverVideo";

const About = () => {
  const countRef = useRef(null);
  const [inViewport, setInViewport] = useState(false);

  const counts = [
    { value: 15, label: "Years Of Experience", duration: 5 },
    { value: 300, label: "Our Employees", duration: 3 },
    { value: 543, label: "Happy Customers", separator: true, duration: 3 },
    { value: 10, label: "Award Winning", duration: 5, delay: 0.5 },
  ];

  const items = [
    {
      id: 1,
      iconSrc: Icon1,
      iconHoverSrc: Icon1Hover,
      title: "100% Transparency",
      description:
        "We ensure that you get a well-detailed break-up of each minor repair work",
    },
    {
      id: 2,
      iconSrc: Icon2,
      iconHoverSrc: Icon2Hover,
      title: "Genuine Spare Parts",
      description:
        "We use authorized genuine spare parts & accessories to ensure that yours",
    },
    {
      id: 3,
      iconSrc: Icon3,
      iconHoverSrc: Icon3Hover,
      title: "Trusted & Quality Service",
      description:
        "You can avail our free pickup & drop so that you can just sit & relax",
    },
    {
      id: 4,
      iconSrc: Icon4,
      iconHoverSrc: Icon4Hover,
      title: "Friendly & Helpful Team",
      description:
        "We are a friendly & helpful professional group of people in autocare",
    },
    {
      id: 5,
      iconSrc: Icon5,
      iconHoverSrc: Icon5Hover,
      title: "Free Pickup & Drop",
      description:
        "You can avail our free pickup & drop so that you can just sit & relax",
    },
    {
      id: 6,
      iconSrc: Icon6,
      iconHoverSrc: Icon6Hover,
      title: "Zero Upselling",
      description:
        "You can see servicing cost upfront our Service Calculator. Only additional",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (countRef.current) {
        const { top, bottom } = countRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        setInViewport(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Loader />
      <Banner bannerImage={BannerImage} showChevron={false} />

      <section className="quality-area quality-area-four pt-100">
        <div className="quality-shape">
          <img src={CarShape} />
        </div>
        <div className="container-fluid p-0">
          <div className="row m-0 align-items-center">
            <div className="col-lg-6 p-0">
              <div className="quality-img">
                <img src={AboutCarImage} alt="Quality" />
                <PopoverVideo />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="quality-content">
                <div className="section-title">
                  <h2>Quality Work is Our First Priority</h2>
                  <p>
                    Ensuring safety is our top priority, and maintaining high
                    quality is our standard. Moreover, we prioritize our
                    customers when it comes to delivering outstanding quality.
                  </p>
                </div>
                <div className="cmn-btn">
                  <a className="banner-btn-left" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area py-5">
        <div className="container">
          <div className="row">
            <div className="section-title mb-0"></div>
            <h2 className="text-main">Business Overview</h2>
            <p>
              Since its establishment in 2022, Taiga Auto Service Sdn Bhd has
              been diligently serving the discerning community of Nusa Bestari,
              Johor Bahru. Our esteemed expertise lies in the art of car repair,
              ensuring that every vehicle entrusted to us receives the utmost
              care and attention it deserves. Furthermore, we take great pride
              in offering an extensive range of top-notch services, including
              but not limited to oil servicing, tire and sport rim maintenance,
              suspension repair, and a plethora of other automotive solutions.
            </p>
            <p>
              Our exceptional staff members are committed to providing
              unparalleled service to our esteemed customers, ensuring that
              their unique needs and financial considerations are meticulously
              addressed. In the rare event that any inconvenience arises as a
              result of our inadvertent error, we guarantee a full refund as a
              prompt and satisfactory resolution.
            </p>
            <p>
              o In our esteemed establishment, we offer a splendid array of
              exquisite sports rims, designed to captivate the discerning eye of
              new customers. Additionally, our extensive collection boasts a
              plethora of esteemed tire brands, ensuring that the needs and
              desires of our esteemed clientele are met with utmost precision.
              Should a customer's desired tire brand be temporarily unavailable,
              our dedicated personnel will promptly liaise with our trusted
              suppliers to procure and bestow it upon our esteemed patron. Rest
              assured, dear customer, your complete satisfaction remains our
              utmost priority.
            </p>
          </div>
        </div>
      </section>

      <section className="statistics-section why-choose-hp-2 py-5">
        <div className="container">
          <div className="why-content">
            <h2 className="text-center text-white mb-5">FACTS &amp; FIGURES</h2>
            <div className="row text-white text-center">
              {counts.map((count, index) => (
                <div
                  key={index}
                  className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="statistics-content">
                    <span className="counterUp" ref={countRef}>
                      {inViewport ? (
                        <CountUp
                          start={0}
                          end={count.value}
                          delay={count.delay}
                          duration={count.duration}
                        />
                      ) : (
                        count.value
                      )}
                    </span>
                    {count.separator && <span className="sub-text">K</span>}
                    <p>{count.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us-area py-5">
        <div className="container">
          <div className="sec-title text-center pb-4">
            <h2 className="text-main">Why Choose Us</h2>
          </div>
          <div className="row">
            {items.map((item) => (
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-xs-12"
                key={item.id}>
                <div className="single-item">
                  <div
                    className="icon-holder"
                    id={`icon-container-${item.id}`}
                    onMouseEnter={() => {
                      const iconContainer = document.getElementById(
                        `icon-container-${item.id}`
                      );
                      if (iconContainer) {
                        iconContainer.querySelector("img").src =
                          item.iconHoverSrc;
                      }
                    }}
                    onMouseLeave={() => {
                      const iconContainer = document.getElementById(
                        `icon-container-${item.id}`
                      );
                      if (iconContainer) {
                        iconContainer.querySelector("img").src = item.iconSrc;
                      }
                    }}>
                    <img src={item.iconSrc} className="icon-image" />
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
