import React, { useState } from "react";
import axios from "axios";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../static/assets/about/about-taiga.png";
import Loader from "../../components/Loader/Loader";
import "./contact.css";
import ButtonMain from "../../components/Button/Button";
import Phone from "../../static/assets/contact/telephone-call.png";
import Email from "../../static/assets/contact/email.png";
import LiveChat from "../../static/assets/contact/live-chat.png";

import TaigaGoogleMap from "../../components/GoogleMap/TaigaGoogleMap";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
    gridCheck: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api_taiga/contact", formData)
      .then((response) => {
        console.log(response.data);
        // Handle success response
        setIsSuccess(true);
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
        setIsSuccess(false);
        alert(
          "There was an error submitting the form. Please try again later."
        );
      });
  };

  return (
    <>
      <Loader />
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"Contact Us"}
        bannerTarget={"Contact Us"}
        bannerPreviousTarget={""}
        showChevron={false}
      />
      <section className="contact-area pt-100 pb-70">
        <div className="container">
          <div className="row text-center mx-0 mb-5">
            <div className="col-lg-4 contact-column background-orange">
              <div className="contact-icon">
                <img src={Phone} />
              </div>
              <div className="contact-content text-color-white">
                <h3>Phone</h3>
                <p>
                  Call us at +012-725 6601 during our office hours (Mon-Fri, 9
                  am - 6 pm).
                </p>
              </div>
            </div>
            <div className="col-lg-4 contact-column">
              <div className="contact-icon">
                <img src={Email} />
              </div>
              <div className="contact-content text-color-orange">
                <h3>Email</h3>
                <p>
                  Prefer to write? Shoot us an email at
                  taigaautoservice@gmail.com, and we'll get back to you within
                  24 hours.
                </p>
              </div>
            </div>
            <div className="col-lg-4 contact-column background-orange">
              <div className="contact-icon">
                <img src={LiveChat} />
              </div>
              <div className="contact-content text-color-white">
                <h3>Live Chat</h3>
                <p>
                  Need immediate assistance? Chat with our experts through the
                  Live Chat button at the corner of your screen.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-item contact-left">
                <h3>Our Located Place</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officiis velit libero vero, aliquid magnam sed, quidem labore
                  unde aspernatur esse iusto quo quas, dolorum atque dignissimos
                  asperiores. Ab, est accusantium.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-location-plus"></i>
                    Address: 101G, Jalan Bestari 1/5, Taman Nusa Bestari, Johor
                    Bahru, Malaysia
                  </li>
                  <li>
                    <i className="bx bx-mail-send"></i>
                    <a href="taigaautoservice@gmail.com">
                      <span className="__cf_email__">
                        taigaautoservice@gmail.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href="tel:+60127256601">+012-725 6601</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-item contact-right">
                <h3>Get In Touch</h3>
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          className="form-control"
                          placeholder="Phone"
                          value={formData.phone_number}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="form-control"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <div className="form-check agree-label">
                          <input
                            name="gridCheck"
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            checked={formData.gridCheck}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="form-check-label">
                            Accept
                            <a href="terms-condition.html" className="px-2">
                              Terms & Conditions
                            </a>
                            And
                            <a href="privacy-policy.html" className="px-2">
                              Privacy Policy.
                            </a>
                          </label>
                          <div className="help-block with-errors gridCheck-error"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                      <ButtonMain
                        buttonA={"contact-btn btn"}
                        text={"Send Message"}
                      />
                    </div>
                  </div>
                  {isSuccess && (
                    <div className="success-message">
                      Form submitted successfully!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          <TaigaGoogleMap />
        </div>
      </section>
    </>
  );
};

export default Contact;
