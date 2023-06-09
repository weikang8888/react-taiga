import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/about/footer-car.png";
import "./contact.css";
const Contact = () => {
  return (
    <>
      {" "}
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"Contact Us"}
        bannerTarget={"Contact Us"}
        bannerPreviousTarget={""}
        showChevron={false}
      />
      <section className="contact-area pt-100 pb-70">
        <div className="container">
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
                    Address: Barmingha, QD 201, United Kingdom
                  </li>
                  <li>
                    <i className="bx bx-mail-send"></i>
                    <a href="/cdn-cgi/l/email-protection#355c5b535a7554405150565e1b565a58">
                      <span
                        className="__cf_email__"
                        data-cfemail="b1d8dfd7def1d0c4d5d4d2da9fd2dedc">
                        [email&#160;protected]
                      </span>
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href="tel:+8562-65516-595">+8562-65516-595</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-item contact-right">
                <h3>Get In Touch</h3>
                <form id="contactForm">
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          data-error="Please enter your name"
                          placeholder="Name"
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
                          data-error="Please enter your email"
                          placeholder="Email"
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
                          data-error="Please enter your number"
                          className="form-control"
                          placeholder="Phone"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="msg_subject"
                          id="msg_subject"
                          className="form-control"
                          data-error="Please enter your subject"
                          placeholder="Subject"
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
                          data-error="Write your message"
                          placeholder="Message"></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <div className="form-check agree-label">
                          <input
                            name="gridCheck"
                            value="I agree to the terms and privacy policy."
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label className="form-check-label">
                            Accept
                            <a href="terms-condition.html">
                              Terms & Conditions
                            </a>
                            And
                            <a href="privacy-policy.html">Privacy Policy.</a>
                          </label>
                          <div className="help-block with-errors gridCheck-error"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                      <button type="submit" className="contact-btn btn">
                        Send Message
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
