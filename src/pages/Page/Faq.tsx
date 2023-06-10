import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/about/footer-car.png";
import "./page.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleItemClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1); // Toggle off if already active
    } else {
      setActiveIndex(index);
    }
  };

  const renderFaqItems = () => {
    return faqData.map((item, index) => (
      <li key={index} onClick={() => handleItemClick(index)}>
        <a className={index === activeIndex ? "active" : ""}>{item.question}</a>
        <p
          className={`faq-answer ${
            index === activeIndex ? "active-answer" : ""
          }`}>
          {item.answer}
        </p>
      </li>
    ));
  };
  return (
    <>
      {" "}
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"FAQ"}
        bannerTarget={"FAQ"}
        bannerPreviousTarget={"Pages"}
        showChevron={true}
      />{" "}
      <section className="faq-area pt-100 pb-70">
        <div className="container">
          <div className="row faq-wrap">
            <div className="col-lg-12">
              <div className="faq-head">
                <h2>Common Questions</h2>
              </div>
              <div className="faq-item">
                <ul className="accordion">{renderFaqItems()}</ul>
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
                  <li>
                    <a>How we do service?</a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Provident porro laboriosam magni labore quaerat,
                      aspernatur iusto error ducimus adipisci, et corporis
                      recusandae illum tenetur hic? Earum excepturi porro fuga
                      ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Ut fugiat, expedita vero et quia saepe debitis
                      exercitationem labore consequatur fuga ab, laudantium sed
                      maiores velit reiciendis. Ullam illo laborum sequi.
                    </p>
                  </li>
                  <li>
                    <a>What is our service quality?</a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Provident porro laboriosam magni labore quaerat,
                      aspernatur iusto error ducimus adipisci, et corporis
                      recusandae illum tenetur hic? Earum excepturi porro fuga
                      ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Sint natus ipsa accusantium saepe dolorem a mollitia
                      tempora consequatur totam modi pariatur nulla, aspernatur
                      dolore consequuntur temporibus unde minima repellendus
                      laboriosam.
                    </p>
                  </li>
                  <li>
                    <a>What people say about our service?</a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Provident porro laboriosam magni labore quaerat,
                      aspernatur iusto error ducimus adipisci, et corporis
                      recusandae illum tenetur hic? Earum excepturi porro fuga
                      ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Sint natus ipsa accusantium saepe dolorem a mollitia
                      tempora consequatur totam modi pariatur nulla, aspernatur
                      dolore consequuntur temporibus unde minima repellendus
                      laboriosam.
                    </p>
                  </li>
                  <li>
                    <a>Do we give home delivery to anyone?</a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Provident porro laboriosam magni labore quaerat,
                      aspernatur iusto error ducimus adipisci, et corporis
                      recusandae illum tenetur hic? Earum excepturi porro fuga
                      ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Sint natus ipsa accusantium saepe dolorem a mollitia
                      tempora consequatur totam modi pariatur nulla, aspernatur
                      dolore consequuntur temporibus unde minima repellendus
                      laboriosam.
                    </p>
                  </li>
                  <li>
                    <a>When parts are available?</a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Provident porro laboriosam magni labore quaerat,
                      aspernatur iusto error ducimus adipisci, et corporis
                      recusandae illum tenetur hic? Earum excepturi porro fuga
                      ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Sint natus ipsa accusantium saepe dolorem a mollitia
                      tempora consequatur totam modi pariatur nulla, aspernatur
                      dolore consequuntur temporibus unde minima repellendus
                      laboriosam.
                    </p>
                  </li>
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
                  <li>
                    <a>How we make car?</a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem? Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Vel, quos mollitia
                      voluptatum aliquam repellendus similique iure fuga
                      aspernatur amet odit! At vitae dicta excepturi quasi?
                      Veritatis, pariatur excepturi! Illum, ut?3
                    </p>
                  </li>
                  <li>
                    <a>What is our car quality?</a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem? Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Vel, quos mollitia
                      voluptatum aliquam repellendus similique iure fuga
                      aspernatur amet odit! At vitae dicta excepturi quasi?
                      Veritatis, pariatur excepturi! Illum, ut?3
                    </p>
                  </li>
                  <li>
                    <a>What people say about our car?</a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem? Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Vel, quos mollitia
                      voluptatum aliquam repellendus similique iure fuga
                      aspernatur amet odit! At vitae dicta excepturi quasi?
                      Veritatis, pariatur excepturi! Illum, ut?3
                    </p>
                  </li>
                  <li>
                    <a>Do we give home delivery to car?</a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem? Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Vel, quos mollitia
                      voluptatum aliquam repellendus similique iure fuga
                      aspernatur amet odit! At vitae dicta excepturi quasi?
                      Veritatis, pariatur excepturi! Illum, ut?3
                    </p>
                  </li>
                  <li>
                    <a>When car is available?</a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem? Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Vel, quos mollitia
                      voluptatum aliquam repellendus similique iure fuga
                      aspernatur amet odit! At vitae dicta excepturi quasi?
                      Veritatis, pariatur excepturi! Illum, ut?3
                    </p>
                  </li>
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
