import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-img">
          <img src="static/picture/footer-car.png" alt="Footer" />
        </div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-logo">
                  <a href="">
                    <img src="static/picture/logo-two.png" alt="Logo" />
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
                        Automobile
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Tyre Service
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Repair Service
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Engine Service
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        System Service
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
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="engineer.html" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="testimonial.html" target="_blank">
                        <i className="bx bx-chevron-right"></i>
                        Testimonials
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
                      <i className="bx bx-phone-call"></i>
                      <a href="tel:+880563246378">+88 0563 246 378</a>
                    </li>
                    <li>
                      <i className="bx bx-mail-send"></i>
                      <a href="/cdn-cgi/l/email-protection#acc5c2cac3eccdd9c8c9cfc782cfc3c1">
                        <span
                          className="__cf_email__"
                          data-cfemail="4920272f2609283c2d2c2a22672a2624">
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="bx bx-mail-send"></i>
                      <a href="/cdn-cgi/l/email-protection#4f272a2323200f2e3a2b2a2c24612c2022">
                        <span
                          className="__cf_email__"
                          data-cfemail="b3dbd6dfdfdcf3d2c6d7d6d0d89dd0dcde">
                          [email&#160;protected]
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
                    Copyright @ 2023 Audeck. Designed By 
                    <a href="https://hibootstrap.com/" target="_blank">
                      Kitar Teliti
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="copyright-item copyright-right">
                  <ul>
                    <li>
                      <a href="terms-and-conditions.html" target="_blank">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <span>-</span>
                    </li>
                    <li>
                      <a href="privacy-policy.html" target="_blank">
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
