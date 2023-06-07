import React, { useEffect, useRef, useState } from "react";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/about/footer-car.png";
import AboutCarImage from "../../assets/about/about-car.jpg";
import Icon1 from "../../assets/icon/like.png";
import Icon1Hover from "../../assets/icon/like-hover.png";
import Icon2 from "../../assets/icon/customer-support.png";
import Icon2Hover from "../../assets/icon/customer-support-hover.png";
import Icon3 from "../../assets/icon/google-maps.png";
import Icon3Hover from "../../assets/icon/google-maps-hover.png";
import Icon4 from "../../assets/icon/add-friend.png";
import Icon4Hover from "../../assets/icon/add-friend-hover.png";
import Icon5 from "../../assets/icon/truck.png";
import Icon5Hover from "../../assets/icon/truck-hover.png";
import Icon6 from "../../assets/icon/dollar-symbol.png";
import Icon6Hover from "../../assets/icon/dollar-symbol-hover.png";

import "./about.css";
import CountUp from "react-countup";

const About = () => {
  const countRef = useRef(null);
  const [inViewport, setInViewport] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const handleViewportChange = (
      inView: boolean | ((prevState: boolean) => boolean)
    ) => {
      setInViewport(inView);
    };

    const inViewOptions = {
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver(([entry]) => {
      handleViewportChange(entry.isIntersecting);
    }, inViewOptions);

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  const counts = [
    { value: 15, label: "Years Of Experience" },
    { value: 300, label: "Our Employees" },
    { value: 985, label: "Happy Customers", separator: true },
    { value: 10, label: "Award Winning" },
  ];

  useEffect(() => {
    if (inViewport && !animationCompleted) {
      setAnimationCompleted(true);
    }
  }, [inViewport, animationCompleted]);

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

  return (
    <>
      <Banner bannerImage={BannerImage} bannerTitle={"About Us"} />

      <section className="quality-area quality-area-four pt-100">
        <div className="container-fluid p-0">
          <div className="row m-0 align-items-center">
            <div className="col-lg-6 p-0">
              <div className="quality-img">
                <img src={AboutCarImage} alt="Quality" />
                <div className="video-wrap">
                  <a
                    href="https://www.youtube.com/watch?v=aqz-KE-bpKQ"
                    className="popup-youtube">
                    <i className="bx bx-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="quality-content">
                <div className="section-title">
                  <h2>Quality Work is Our First Priority</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
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
              For over half a <strong>century</strong>, Service Group has been
              the leading and largest manufacturers of
              <strong> tyres </strong> , <strong> tubes </strong> , and
              <strong> footwear </strong>
              in Pakistan. With an established nationwide network, it reaches
              out and touches millions of lives through its power brands.
            </p>
            <p>
              Beginning its modest journey in
              <strong> 1941 </strong>
              with the manufacturing of handbags and sports goods, it
              established a<strong> shoe </strong>
              manufacturing plant in
              <strong> 1954 </strong>. Today the production site of the company
              has flourished into Service Industries Limited (SIL), a public
              limited company, with annual sales revenue of approximately
              <strong> PKR 33 billion </strong>. The company carries a
              well-reputed and respected image as producers of world-className
              shoes, tyres, and tubes at their manufacturing facilities in
              <strong> Gujrat </strong>
              and
              <strong> Muridke </strong>.
            </p>
            <p>
              In addition to being a leading company in Pakistan, SIL has the
              distinctive honour of being the largest exporter of tyres, tubes,
              and footwear products with an ever-expanding international
              footprint in Europe, the Middle East, South America, Africa, Asia,
              and the Far East.
            </p>
            <p>
              Presently, the company employs more than
              <strong> 12,000 </strong>
              dedicated and skilled personnel who are constantly contributing to
              the recognition and growth of the company both domestically and
              internationally.
            </p>
          </div>
        </div>
      </section>

      <section className="statistics-section why-choose-hp-2 py-5">
        <div className="container">
          <div className="why-content">
            <h2 className="text-center text-white mb-5">FACTS &amp; FIGURES</h2>
            <div className="row text-white text-center">
              {counts.map(({ label, value, separator }, index) => {
                return (
                  <div
                    key={index}
                    className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
                    ref={countRef}>
                    <div className="statistics-content">
                      {animationCompleted ? (
                        <CountUp start={0} end={value} duration={3} />
                      ) : (
                        <span>0</span>
                      )}
                      {separator && <span className="sub-text">K</span>}
                      <p>{label}</p>
                    </div>
                  </div>
                );
              })}
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
