import React, { useEffect, useState } from "react";
import Car from "../../assets/image/sedan-car-front.png";
import Audi from "../../assets/products/audi.png";
import BMW from "../../assets/products/bmw.png";
import Bentley from "../../assets/products/bentley.jpg";
import Chevrolet from "../../assets/products/chevrolet.jpg";
import Ferrari from "../../assets/products/ferrari.jpg";
import Haval from "../../assets/products/haval.jpg";
import Honda from "../../assets/products/honda.jpg";
import Hyundai from "../../assets/products/hyundai.jpg";
import Benz from "../../assets/products/benz.png";
import Mini from "../../assets/products/mini.jpg";
import Lexus from "../../assets/products/lexus.jpg";
import Madza from "../../assets/products/mazda.png";
import Nissan from "../../assets/products/nissan.jpg";
import Perodua from "../../assets/products/perodua.png";
import Porsche from "../../assets/products/porsche.jpg";
import Proton from "../../assets/products/proton.jpg";
import LandRover from "../../assets/products/landrover.jpg";
import Subaru from "../../assets/products/Subaru.png";
import KIA from "../../assets/products/kia.jpg";
import Toyota from "../../assets/products/toyota.jpg";
import Ford from "../../assets/products/ford.jpg";
import Peugeot from "../../assets/products/peugeot.jpg";
import Volkswagen from "../../assets/products/volkswagen.jpg";
import Volvo from "../../assets/products/volvo.jpg";

const HomepageProducts = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="products-area ptb-100 px-3">
      {windowWidth <= 990 ? (
        <div className="row text-center products-column">
          <div className="section-title mb-3">
            <h2 className="text-uppercase fw-bold">
              Select Your Car <span className="fw-normal">For</span> Tyre
              Suggestion
            </h2>
            <img src={Car} />
          </div>
          <div className="products-column-brand">
            <div className="products-brand">
              <a>
                <img src={Audi} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={BMW} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Bentley} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Chevrolet} />
              </a>
            </div>
          </div>
          <div className="products-column-brand">
            <div className="products-brand">
              <a>
                <img src={Ferrari} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Haval} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Honda} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Hyundai} />
              </a>
            </div>
          </div>
          <div className="products-column-brand">
            <div className="products-brand">
              <a>
                <img src={Benz} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Mini} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Lexus} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Madza} />
              </a>
            </div>
          </div>
          <div className="products-column-brand">
            <div className="products-brand">
              <a>
                <img src={Nissan} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Perodua} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Porsche} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Proton} />
              </a>
            </div>
          </div>
          <div className="products-column-brand">
            <div className="products-brand">
              <a>
                <img src={LandRover} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Subaru} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={KIA} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Toyota} />
              </a>
            </div>
          </div>
          <div className="products-column-brand">
            <div className="products-brand">
              <a>
                <img src={Ford} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Peugeot} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Volkswagen} />
              </a>
            </div>
            <div className="products-brand">
              <a>
                <img src={Volvo} />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row text-center products-column">
            <div className="section-title mb-3">
              <h2 className="text-uppercase fw-bold">
                Select Your Car <span className="fw-normal">For</span> Tyre
                Suggestion
              </h2>
              <img src={Car} />
            </div>
            <div className="products-column-brand">
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Audi} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={BMW} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Bentley} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Chevrolet} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Ferrari} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Haval} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Honda} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Hyundai} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Benz} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Mini} />
                </a>
              </div>
            </div>
            <div className="products-column-brand">
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Lexus} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Madza} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Nissan} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Perodua} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Porsche} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Proton} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={LandRover} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Subaru} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={KIA} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Toyota} />
                </a>
              </div>
            </div>
            <div className="products-column-brand">
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Ford} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Peugeot} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Volkswagen} />
                </a>
              </div>
              <div className="products-brand">
                <a className="d-inline-block">
                  <img src={Volvo} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomepageProducts;
