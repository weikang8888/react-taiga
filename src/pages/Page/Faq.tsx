import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/about/footer-car.png";
import "./page.css";
import Loader from "../../components/Loader/Loader";

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [activeIndex3, setActiveIndex3] = useState(null);

  const faqData = [
    {
      question: "How we serve to people?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "How is our parts quality?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "How do we give home delivery?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "Is this audeck 24 hours open?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    // Add more FAQ items here
  ];

  const faqData2 = [
    {
      question: "How we do service?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "What is our service quality?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "What people say about our service?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "Do we give home delivery to anyone?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "When parts are available?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
  ];

  const faqData3 = [
    {
      question: "How we make car?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "What is our car quality?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "What people say about our service?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "Do we give home delivery to anyone?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
    {
      question: "When parts are available?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing el Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?",
    },
  ];

  const handleItemClick = (sectionIndex, itemIndex) => {
    if (sectionIndex === 1) {
      if (itemIndex === activeIndex1) {
        setActiveIndex1(-1);
      } else {
        setActiveIndex1(itemIndex);
      }
    } else if (sectionIndex === 2) {
      if (itemIndex === activeIndex2) {
        setActiveIndex2(-1);
      } else {
        setActiveIndex2(itemIndex);
      }
    } else if (sectionIndex === 3) {
      if (itemIndex === activeIndex3) {
        setActiveIndex3(-1);
      } else {
        setActiveIndex3(itemIndex);
      }
    }
  };

  return (
    <>
      <Loader />
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"FAQ"}
        bannerTarget={"FAQ"}
        bannerPreviousTarget={"Pages"}
        showChevron={true}
      />
      <section className="faq-area pt-100 pb-70">
        <div className="container">
          <div className="row faq-wrap">
            <div className="col-lg-12">
              <div className="faq-head">
                <h2>Common Questions</h2>
              </div>
              <div className="faq-item">
                <ul className="accordion">
                  {faqData.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(1, index)}>
                      <a className={index === activeIndex1 ? "active" : ""}>
                        {item.question}
                      </a>
                      <p
                        className={
                          index === activeIndex1 ? "active-answer" : ""
                        }>
                        {item.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row faq-wrap">
            <div className="col-lg-12">
              <div className="faq-head">
                <h2>Service</h2>
              </div>
              <div className="faq-item">
                <ul className="accordion">
                  {faqData2.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(2, index)}>
                      <a className={index === activeIndex2 ? "active" : ""}>
                        {item.question}
                      </a>
                      <p
                        className={
                          index === activeIndex2 ? "active-answer" : ""
                        }>
                        {item.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row faq-wrap">
            <div className="col-lg-12">
              <div className="faq-head">
                <h2>Car</h2>
              </div>
              <div className="faq-item">
                <ul className="accordion">
                  {faqData3.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(3, index)}>
                      <a className={index === activeIndex3 ? "active" : ""}>
                        {item.question}
                      </a>
                      <p
                        className={
                          index === activeIndex3 ? "active-answer" : ""
                        }>
                        {item.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
