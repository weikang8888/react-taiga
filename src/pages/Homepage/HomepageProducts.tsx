import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Car from "../../static/assets/image/sedan-car-front.png";
import Audi from "../../static/assets/products/audi.png";
import BMW from "../../static/assets/products/bmw.png";
import Bentley from "../../static/assets/products/bentley.jpg";
import Chevrolet from "../../static/assets/products/chevrolet.jpg";
import Ferrari from "../../static/assets/products/ferrari.jpg";
import Haval from "../../static/assets/products/haval.jpg";
import Honda from "../../static/assets/products/honda.jpg";
import Hyundai from "../../static/assets/products/hyundai.jpg";
import Benz from "../../static/assets/products/benz.png";
import Mini from "../../static/assets/products/mini.jpg";
import Lexus from "../../static/assets/products/lexus.jpg";
import Madza from "../../static/assets/products/mazda.png";
import Nissan from "../../static/assets/products/nissan.jpg";
import Perodua from "../../static/assets/products/perodua.png";
import Porsche from "../../static/assets/products/porsche.jpg";
import Proton from "../../static/assets/products/proton.jpg";
import LandRover from "../../static/assets/products/landrover.jpg";
import Subaru from "../../static/assets/products/Subaru.png";
import KIA from "../../static/assets/products/kia.jpg";
import Toyota from "../../static/assets/products/toyota.jpg";
import Ford from "../../static/assets/products/ford.jpg";
import Peugeot from "../../static/assets/products/peugeot.jpg";
import Volkswagen from "../../static/assets/products/volkswagen.jpg";
import Volvo from "../../static/assets/products/volvo.jpg";

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
              <Link to="/products/audi/">
                <img src={Audi} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/bmw">
                <img src={BMW} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/bentley">
                <img src={Bentley} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/chevrolet">
                <img src={Chevrolet} />
              </Link>
            </div>
          </div>
          <div className="products-column-brand">
            <div className="products-brand">
              <Link to="/products/ferrari">
                <img src={Ferrari} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/haval">
                <img src={Haval} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/honda">
                <img src={Honda} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/hyundai">
                <img src={Hyundai} />
              </Link>
            </div>
          </div>
          <div className="products-column-brand">
            <div className="products-brand">
              <Link to="/products/benz">
                <img src={Benz} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/mini">
                <img src={Mini} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/lexus">
                <img src={Lexus} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/madza">
                <img src={Madza} />
              </Link>
            </div>
          </div>
          <div className="products-column-brand">
            <div className="products-brand">
              <Link to="/products/nissan">
                <img src={Nissan} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/perodua">
                <img src={Perodua} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/porsche">
                <img src={Porsche} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/proton">
                <img src={Proton} />
              </Link>
            </div>
          </div>
          <div className="products-column-brand">
            <div className="products-brand">
              <Link to="/products/landRover">
                <img src={LandRover} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/subaru">
                <img src={Subaru} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/kia">
                <img src={KIA} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/toyota">
                <img src={Toyota} />
              </Link>
            </div>
          </div>
          <div className="products-column-brand">
            <div className="products-brand">
              <Link to="/products/ford">
                <img src={Ford} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/peugeot">
                <img src={Peugeot} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/volkswagen">
                <img src={Volkswagen} />
              </Link>
            </div>
            <div className="products-brand">
              <Link to="/products/volvo">
                <img src={Volvo} />
              </Link>
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
                <Link to="/products/audi">
                  <img src={Audi} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/bmw">
                  <img src={BMW} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/bentley">
                  <img src={Bentley} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/chevrolet">
                  <img src={Chevrolet} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/ferrari">
                  <img src={Ferrari} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/haval">
                  <img src={Haval} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/honda">
                  <img src={Honda} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/hyundai">
                  <img src={Hyundai} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/mers">
                  <img src={Benz} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/mini">
                  <img src={Mini} />
                </Link>
              </div>
            </div>
            <div className="products-column-brand">
              <div className="products-brand">
                <Link to="/products/lexus">
                  <img src={Lexus} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/madza">
                  <img src={Madza} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/nissan">
                  <img src={Nissan} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/perodua">
                  <img src={Perodua} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/porsche">
                  <img src={Porsche} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/proton">
                  <img src={Proton} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/landRover">
                  <img src={LandRover} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/subaru">
                  <img src={Subaru} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/kia">
                  <img src={KIA} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/toyota">
                  <img src={Toyota} />
                </Link>
              </div>
            </div>
            <div className="products-column-brand">
              <div className="products-brand">
                <Link to="/products/ford">
                  <img src={Ford} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/peugeot">
                  <img src={Peugeot} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/volkswagen">
                  <img src={Volkswagen} />
                </Link>
              </div>
              <div className="products-brand">
                <Link to="/products/volvo">
                  <img src={Volvo} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomepageProducts;
