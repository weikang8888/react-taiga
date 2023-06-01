import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/image/tiger.png";
import Button from "../Button/Button";
import "./header.css";

const Header = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll(); // Call the function on page load

    window.addEventListener("scroll", handleScroll); // Call the function when the user scrolls

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener when the component unmounts
    };
  }, []);

  const firstDivClassName = isScrolled ? "d-none" : "";
  const secondDivClassName = isScrolled ? "bg-black top-0" : "";
  const logoImgClassName = isScrolled
    ? "navbar-logo-height navbar-logo-height-75"
    : "navbar-logo-height";
  const dropdownMenuClassName = isScrolled
    ? "dropdown-menu bg-black"
    : "dropdown-menu";

  return (
    <>
      <div
        className={`container-fluid p-0 fixed-top px-5 text-end top-0 ${firstDivClassName}`}
        style={props.style}>
        <div className="row gx-0 d-none d-lg-flex">
          <div className="px-5 text-end text-white">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>123 Street, New York, USA</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small>+012 345 6789</small>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-lg navbar-light shadow fixed-top p-0 justify-content-between w-100 ${secondDivClassName}`}
        style={props.style}>
        <div className="align-items-center px-4 px-lg-5">
          <img src={Logo} alt="My Logo" className={logoImgClassName} />
        </div>
        <div className="text-end">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto p-4 p-lg-0">
              <li className="nav-item px-2">
                <a href="index.html" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <a href="about.html" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item px-2">
                <a
                  href="javascript:void(0)"
                  className="nav-link dropdown-toggle">
                  Services
                </a>
                <ul className={dropdownMenuClassName}>
                  <li className="nav-item">
                    <a href="service/pressure-check.html" className="nav-link">
                      Pressure Check
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="service/suspension-service.html"
                      className="nav-link">
                      Suspension Service
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="service/wheel-alignment.html" className="nav-link">
                      Wheel Alignment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="service/brake-service.html" className="nav-link">
                      Brake Service
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="service/tyre-balancing.html" className="nav-link">
                      Tyre Balancing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="service/engine-oil-service.html"
                      className="nav-link">
                      Engine Oil Service
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-2">
                <a href="product.html" className="nav-link dropdown-toggle">
                  Products
                </a>
              </li>
              <li className="nav-item px-2">
                <a
                  href="javascript:void(0)"
                  className="nav-link dropdown-toggle">
                  Pages
                </a>
                <ul className={dropdownMenuClassName}>
                  <li className="nav-item">
                    <a href="service/pressure-check.html" className="nav-link">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="service/suspension-service.html"
                      className="nav-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="service/wheel-alignment.html" className="nav-link">
                      Term &amp; Conditions
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-2">
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <Button text="Get A Quote" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
