import React, { useEffect } from "react";
import "./buttonScrollTop.css";

const ButtonScrollTop = (style) => {
  useEffect(() => {
    const handleScroll = () => {
      const toTopButton = document.getElementById("toTop");
      if (window.scrollY > 100) {
        toTopButton.classList.add("show");
      } else {
        toTopButton.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        id="toTop"
        className="back-to-top-btn"
        onClick={scrollToTop}
        style={{}}>
        <i className="bx bx-up-arrow"></i>
      </div>
    </>
  );
};

export default ButtonScrollTop;
