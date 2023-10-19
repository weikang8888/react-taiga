import React from "react";
import BannerImage from "../../static/assets/about/footer-car.png";
import Logo from "../../static/assets/image/tiger.png";
import "./footer.css";
import { Link } from "react-router-dom";
import CopyrightFooter from "./CopyrightFooter";

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
                  <Link to="/">
                    <img src={Logo} alt="Logo" className="footer-logo-img" />
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam nobis et praesentium architecto ex laudantium
                    voluptates in dolore
                  </p>
                  <ul>
                    <li>
                      <Link to="" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" target="_blank">
                        <i className="bx bxl-instagram-alt"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </Link>
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
                      <Link to="/services/pressure-check" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Pressure Check Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/suspension-service" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Suspension Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/wheel-alignment" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Wheel Alignment
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/brake-service" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Brake Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/tyre-balancing" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Tyre Balancing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/engine-oil-service" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Engine Oil Service
                      </Link>
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
                      <Link to="/" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/faq" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/contactUs" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Contact
                      </Link>
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
                      101G, Jalan Bestari 1/5, Taman Nusa Bestari, Johor Bahru,
                      Malaysia
                    </li>
                    <li>
                      <i className="bx bx-phone-call"></i>
                      <a href="tel:+880123456789">+012-725 6601</a>
                    </li>
                    <li>
                      <i className="bx bx-mail-send"></i>
                      <a href="/cdn-cgi/l/email-protection#acc5c2cac3eccdd9c8c9cfc782cfc3c1">
                        <span
                          className="__cf_email__"
                          data-cfemail="4920272f2609283c2d2c2a22672a2624">
                          taigaautoservice@gmail.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <CopyrightFooter />
        </div>
      </footer>
    </>
  );
};

export default Footer;
