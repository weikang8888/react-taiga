import React from "react";
import BannerImage from "../../assets/about/footer-car.png";
import Logo from "../../assets/image/tiger.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-img">
          <img src={BannerImage} alt="Footer" />
        </div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-logo">
                  <a href="">
                    <img src={Logo} alt="Logo" className="footer-logo-img"/>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam nobis et praesentium architecto ex laudantium
                    voluptates in dolore
                  </p>
                  <ul>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-instagram-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-service">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Pressure Check Service
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Suspension Service
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Wheel Alignment
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Brake Service
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Tyre Balancing
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Engine Oil Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-service">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="about.html" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="blog.html" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="engineer.html" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="testimonial.html" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-service footer-find">
                  <h3>Find Us</h3>
                  <ul>
                    <li>
                      <i className="bx bx-location-plus"></i>
                      28/A Street, New York City
                    </li>
                    <li>
                      <i className="bx bx-phone-call"></i>
                      <a href="tel:+880123456789">+88 0123 456 789</a>
                    </li>
                    <li>
                      <i className="bx bx-mail-send"></i>
                      <a href="/cdn-cgi/l/email-protection#acc5c2cac3eccdd9c8c9cfc782cfc3c1">
                        <span
                          className="__cf_email__"
                          data-cfemail="4920272f2609283c2d2c2a22672a2624">
                          taiga@hotmail.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="row">
              <div className="col-lg-7">
                <div className="copyright-item">
                  <p>
                    Copyright @ 2023 Taiga. Designed By
                    <a href="" target="_blank" className="px-1">
                      Kitar Teliti
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="copyright-item copyright-right">
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <span>-</span>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
