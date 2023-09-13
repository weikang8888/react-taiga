import React from "react";
import Car from "../../assets/image/sedan-car-front.png";
import Audi from "../../assets/image/products/audi.png";
import BMW from "../../assets/image/products/bmw.png";
import Bentley from "../../assets/image/products/bentley.png";
import Chevrolet from "../../assets/image/products/chevrolet.png";
import Ferrari from "../../assets/image/products/ferrari.png";
import Haval from "../../assets/image/products/haval.png";
import Honda from "../../assets/image/products/honda.png";
import Hyundai from "../../assets/image/products/hyundai.png";
import Benz from "../../assets/image/products/benz.png";
import Mini from "../../assets/image/products/mini.png";

const HomepageProducts = () => {
  return (
    <section className="products-area ptb-100">
      <div className="container">
        <div className="row text-center products-column">
          <h2 className="text-uppercase fw-bold">
            Select Your Car <span className="fw-normal">For</span> Tyre
            Suggestion
          </h2>
          <div>
            <img src={Car} />
          </div>
          <div className="products-column-brand">
            <a className="products-brand">
              <img src={Audi} />
            </a>
            <a className="products-brand">
              <img src={BMW} />
            </a>
            <a className="products-brand">
              <img src={Bentley} />
            </a>
            <a className="products-brand">
              <img src={Chevrolet} />
            </a>
            <a className="products-brand">
              <img src={Ferrari} />
            </a>
            <a className="products-brand">
              <img src={Haval} />
            </a>
            <a className="products-brand">
              <img src={Honda} />
            </a>
            <a className="products-brand">
              <img src={Hyundai} />
            </a>
            <a className="products-brand">
              <img src={Benz} />
            </a>
            <a className="products-brand">
              <img src={Mini} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageProducts;
