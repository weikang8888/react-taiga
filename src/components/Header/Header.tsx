import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, NavLink, useNavigate } from "react-router-dom";

import Logo from "../../static/assets/image/tiger.png";
import Button from "../Button/Button";
import "./header.css";
import User from "../../static/assets/image/human.png";
import { useAuth } from "../../AuthContent";

const Header = ({ props }) => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, userName } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const { hideFirstDiv, logoHeight, background, top } = props;
  const headerStyle = {
    background,
    top,
  };
  const [isMeanNavVisible, setIsMeanNavVisible] = useState(false);
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] =
    useState(false);
  const [isPagesDropdownVisible, setIsPagesDropdownVisible] = useState(false);
  const toggleMeanNavVisibility = () => {
    setIsMeanNavVisible((prevState) => !prevState);
  };

  const toggleServicesDropdown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsServicesDropdownVisible(!isServicesDropdownVisible);
    setIsServicesDropdownVisible(!isServicesDropdownVisible);
  };

  const togglePagesDropdown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsPagesDropdownVisible(!isPagesDropdownVisible);
    setIsPagesDropdownVisible(!isPagesDropdownVisible);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsMeanNavVisible(false);
  };

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

  const dropdownMenuClassName = isScrolled ? "bg-black" : "";

  return (
    <>
      <div
        className={`container-fluid p-0 fixed-top text-end top-0 hide-on-mobile ${
          hideFirstDiv ? "d-none" : ""
        }`}
        style={headerStyle}>
        <div className="row gx-0 d-none d-lg-flex text-white">
          <div className="px-3">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="bx bx-map-pin color-primary me-2 fs-5"></small>
              <small>
                101G, Jalan Bestari 1/5, Taman Nusa Bestari, Johor Bahru,
                Malaysia
              </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="bx bx-time color-primary me-2 fs-5"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="bx bx-phone color-primary me-2 fs-5"></small>
              <small>+012-725-6601</small>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`navbar navbar-expand-lg navbar-light shadow fixed-top p-0 justify-content-between w-100 ${
          isScrolled ? "bg-black top-0" : ""
        } `}
        style={headerStyle}>
        <div className="align-items-center ">
          <img
            src={Logo}
            alt="My Logo"
            className={`align-items-center  ${
              isScrolled ? "navbar-logo-height-75" : "navbar-logo-height"
            } ${logoHeight ? "navbar-logo-height-75" : ""}`}
          />
        </div>
        <a className="meanmenu-reveal" onClick={toggleMeanNavVisibility}>
          <span>
            <span>
              <span></span>
            </span>
          </span>
        </a>
        <nav
          style={{ display: isMeanNavVisible ? "block" : "none" }}
          className="mean-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                onClick={() => setIsMeanNavVisible(false)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => setIsMeanNavVisible(false)}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className="nav-link"
                onClick={() => setIsMeanNavVisible(false)}>
                Products
              </NavLink>
            </li>
            <li className="nav-item" onClick={toggleServicesDropdown}>
              <NavLink
                to="/services"
                className="nav-link"
                onClick={(e) => e.preventDefault()}>
                Services
              </NavLink>
              <ul
                className={`dropdown-menu ${isScrolled ? "bg-black" : ""}`}
                style={{
                  display: isServicesDropdownVisible ? "block" : "none",
                }}>
                <li className="nav-item">
                  <Link
                    to="/services/pressure-check"
                    className="nav-link"
                    onClick={() => setIsMeanNavVisible(false)}>
                    Pressure Check
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services/suspension-service"
                    className="nav-link"
                    onClick={() => setIsMeanNavVisible(false)}>
                    Suspension Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services/wheel-alignment"
                    className="nav-link"
                    onClick={() => setIsMeanNavVisible(false)}>
                    Wheel Alignment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services/brake-service"
                    className="nav-link"
                    onClick={() => setIsMeanNavVisible(false)}>
                    Brake Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services/tyre-balancing"
                    className="nav-link"
                    onClick={() => setIsMeanNavVisible(false)}>
                    Tyre Balancing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services/engine-oil-service"
                    className="nav-link"
                    onClick={() => setIsMeanNavVisible(false)}>
                    Engine Oil Service
                  </Link>
                </li>
              </ul>
              <a className="mean-expand" href="#">
                {isServicesDropdownVisible ? "-" : "+"}
              </a>
            </li>
            <li className="nav-item" onClick={togglePagesDropdown}>
              <NavLink
                to="/pages"
                className="nav-link"
                onClick={(e) => e.preventDefault()}>
                Pages
              </NavLink>
              <ul
                className={`dropdown-menu ${isScrolled ? "bg-black" : ""}`}
                style={{ display: isPagesDropdownVisible ? "block" : "none" }}>
                <li className="nav-item">
                  <Link
                    to="/pages/faq"
                    className="nav-link"
                    onClick={() => setIsMeanNavVisible(false)}>
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/pages/privacy-policy"
                    className="nav-link"
                    onClick={() => setIsMeanNavVisible(false)}>
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/pages/term-conditions"
                    className="nav-link"
                    onClick={() => setIsMeanNavVisible(false)}>
                    Tern & Conditions
                  </Link>
                </li>
              </ul>
              <a className="mean-expand" href="#">
                {isPagesDropdownVisible ? "-" : "+"}
              </a>
            </li>
            <li className="nav-item mean-last">
              <NavLink
                to="/contactUs"
                className="nav-link"
                onClick={() => setIsMeanNavVisible(false)}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item mean-last">
              {isLoggedIn ? (
                <NavLink
                  to="/login"
                  className="nav-link"
                  onClick={handleLogout}>
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className="nav-link"
                  onClick={() => setIsMeanNavVisible(false)}>
                  Login / Register
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
        <div className="collapse-column">
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
                  <NavLink to="/products" className="nav-link">
                    Products
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
                    </li>
                    <li className="nav-item">
                      <Link to="/services/brake-service" className="nav-link">
                        Brake Service
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/services/tyre-balancing" className="nav-link">
                        Tyre Balancing
                      </Link>
                    </li>
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
                <li className="nav-item px-2 ">
                  <NavLink to="/contactUs" className="nav-link">
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item px-2 ">
                  {isLoggedIn ? (
                    <div className="d-flex align-items-center user-wrapper">
                      <div>
                        <img src={User} alt="User Image" />
                        <ul
                          className={`dropdown-menu ${dropdownMenuClassName}`}>
                          <li className="nav-item">
                            <div
                              className="nav-link fw-bold"
                              onClick={handleLogout}>
                              Logout
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="profile-info text-white">
                        <span className="name">{userName}</span>
                      </div>
                    </div>
                  ) : (
                    <Button text="Login/Register" buttonUrl={"/login"} />
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* <div className="px-4"></div> */}
      </nav>
    </>
  );
};

export default Header;
