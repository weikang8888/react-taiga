import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/about/footer-car.png";
import "./product.css";
import Loader from "../../components/Loader/Loader";
import mixitup from "mixitup";
import ButtonMain from "../../components/Button/Button";

const Product = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    const mixer = mixitup(container, {
      selectors: {
        control: ".filter",
      },
    });

    return () => {
      mixer.destroy();
    };
  }, [products]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        const formattedProducts = response.data.map((product) => ({
          ...product,
          filters: JSON.parse(product.filters),
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Loader />
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"Products"}
        bannerTarget={"Products"}
        bannerPreviousTarget={""}
        showChevron={false}
      />
      <section className="products-area pt-100 pb-70">
        <div className="sorting-menu">
          <ul>
            <li
              className={`filter ${activeFilter === "all" ? "active" : ""}`}
              data-filter="all"
              onClick={() => {
                setActiveFilter("all");
              }}>
              all
            </li>
            <li
              className={`filter ${activeFilter === "tyre" ? "active" : ""}`}
              data-filter=".wheels"
              onClick={() => setActiveFilter("tyre")}>
              wheels
            </li>
            <li
              className={`filter ${activeFilter === "ui" ? "active" : ""}`}
              data-filter=".brakes"
              onClick={() => setActiveFilter("ui")}>
              brakes
            </li>
            <li
              className={`filter ${activeFilter === "ux" ? "active" : ""}`}
              data-filter=".oil"
              onClick={() => setActiveFilter("ux")}>
              black oil
            </li>
            <li
              className={`filter ${
                activeFilter === "branding" ? "active" : ""
              }`}
              data-filter=".tyre"
              onClick={() => setActiveFilter("branding")}>
              tyre
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row" ref={containerRef}>
            {products.map((product, index) => (
              <div
                key={index}
                className={`col-sm-6 col-lg-3 mix ${product.filters.join()}`}>
                <div className="products-item">
                  <div className="products-top">
                    <img
                      src={require(`../../assets/products/${product.products_image}`)}
                      alt="Parts"
                    />
                  </div>
                  <h3>{product.products_name}</h3>
                  <span>{product.products_price}</span>
                  <ButtonMain text="Read More" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
