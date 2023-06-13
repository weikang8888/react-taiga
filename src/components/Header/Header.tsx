import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";

import Logo from "../../assets/image/tiger.png";
import Button from "../Button/Button";
import "./header.css";

const Header = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { location, hideFirstDiv, logoHeight } = props;

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

  const hideFirstDivClassName = hideFirstDiv ? "d-none" : "";
  const logoHeightClassName = logoHeight ? "navbar-logo-height-75" : "";
  const logoImgClassName = isScrolled
    ? `${logoHeightClassName} navbar-logo-height-75`
    : "navbar-logo-height";
  const firstDivClassName = isScrolled ? "d-none" : hideFirstDivClassName;
  const secondDivClassName = isScrolled ? "bg-black top-0" : "";
  const dropdownMenuClassName = isScrolled ? "bg-black" : "";

  return (
    <>
      <div
        className={`container-fluid p-0 fixed-top text-end top-0 ${firstDivClassName} ${hideFirstDivClassName}`}
        style={props.style}>
        <div className="row gx-0 d-none d-lg-flex">
          <div className="px-5 text-end text-white">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="bx bx-map-pin color-primary me-2 fs-5"></small>
              <small>123 Street, New York, USA</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="bx bx-time color-primary me-2 fs-5"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="bx bx-phone color-primary me-2 fs-5"></small>
              <small>+012 345 6789</small>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`navbar navbar-expand-lg navbar-light shadow fixed-top p-0 justify-content-between w-100 ${secondDivClassName}`}
        style={props.style}>
        <div className="align-items-center px-4 px-lg-5">
          <img
            src={Logo}
            alt="My Logo"
            className={`${logoImgClassName} ${logoHeightClassName}`}
          />
        </div>
        <div className="text-end">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <nav className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto p-4 p-lg-0">
                <li className="nav-item px-2">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink
                    to="/services"
                    className="nav-link dropdown-toggle"
                    onClick={(e) => e.preventDefault()}>
                    Services
                  </NavLink>
                  <ul className={`dropdown-menu ${dropdownMenuClassName}`}>
                    <li className="nav-item">
                      <Link to="/services/pressure-check" className="nav-link">
                        Pressure Check
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services/suspension-service"
                        className="nav-link">
                        Suspension Service
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/services/wheel-alignment" className="nav-link">
                        Wheel Alignment
                      </Link>
                    </li>{" "}
                    <li className="nav-item">
                      <Link to="/services/brake-service" className="nav-link">
                        Brake Service
                      </Link>
                    </li>{" "}
                    <li className="nav-item">
                      <Link to="/services/tyre-balancing" className="nav-link">
                        Tyre Balancing
                      </Link>
                    </li>{" "}
                    <li className="nav-item">
                      <Link
                        to="/services/engine-oil-service"
                        className="nav-link">
                        Engine Oil Service
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-2">
                  <NavLink to="/products" className="nav-link dropdown-toggle">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink
                    to="/pages"
                    className="nav-link dropdown-toggle"
                    onClick={(e) => e.preventDefault()}>
                    Pages
                  </NavLink>
                  <ul className={`dropdown-menu ${dropdownMenuClassName}`}>
                    <li className="nav-item">
                      <Link to="/pages/faq" className="nav-link">
                        FAQ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pages/privacy-policy" className="nav-link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pages/term-conditions" className="nav-link">
                        Tern & Conditions
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-2">
                  <NavLink to="/contactUs" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Button text="Get A Quote" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
