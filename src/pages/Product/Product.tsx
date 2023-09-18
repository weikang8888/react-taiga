import React, { useEffect, useState } from "react";
import axios from "axios";
import InputRange from "react-input-range";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../static/assets/about/footer-car.png";
import "react-input-range/lib/css/index.css";
import "./product.css";
import Loader from "../../components/Loader/Loader";
import PriceRangeDisplay from "./PriceRangeDisplay";
import Textproduct from "../../static/assets/picture/powertrac_racingpro-2-300x300.jpg";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });

  // Handle changes in the price range
  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api_taiga/products/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <div className="container">
          <div className="row">
            <div className="widgets-area col-md-3 col-sm-12 col-xs-12">
              <div className="widget">
                <h4 className="widget-title">Filter by price</h4>
                <div className="price_slider_wrapper">
                  <InputRange
                    maxValue={2000} // Set your desired max value
                    minValue={0} // Set your desired min value
                    value={priceRange}
                    onChange={handlePriceChange}
                    formatLabel={(value) => `RM${value}`} // Optional: Format label as desired
                  />
                  <PriceRangeDisplay
                    minValue={priceRange.min}
                    maxValue={priceRange.max}
                  />
                </div>
              </div>
              <div className="widget">
                <h4 className="widget-title">Filter by</h4>
                <div className="widget-wrapper">
                  <ul
                    className="widget-layered-nav-list mf-widget-layered-nav-scroll"
                    data-height="130">
                    <li className="widget-layered-nav-list__item">
                      <label className="custom-checkbox">
                        <input type="checkbox" value="Toyo Tires" />
                        <span className="checkbox-label">Toyo Tires</span>
                      </label>
                    </li>
                    <li className="widget-layered-nav-list__item">
                      <label className="custom-checkbox">
                        <input type="checkbox" value="Toyo Tires" />
                        <span className="checkbox-label">Michelin</span>
                      </label>
                    </li>
                    <li className="widget-layered-nav-list__item">
                      <label className="custom-checkbox">
                        <input type="checkbox" value="Toyo Tires" />
                        <span className="checkbox-label">Continental</span>
                      </label>
                    </li>
                    <li className="widget-layered-nav-list__item">
                      <label className="custom-checkbox">
                        <input type="checkbox" value="Toyo Tires" />
                        <span className="checkbox-label">BridgeStone</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <h4 className="widget-title">Categories</h4>
                <ul className="product-categories p-0">
                  <li className="cat-item">
                    <a>Audi</a>
                  </li>
                  <li className="cat-item">
                    <a>BMW</a>
                  </li>
                  <li className="cat-item">
                    <a>Bentley</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-area col-md-9 col-sm-12 col-xs-12">
              <div
                id="mf-catalog-toolbar"
                className="shop-toolbar multiple mb-4">
                <div className="products-found">
                  <strong>1141</strong>Products found
                </div>
                <div className="shop-view"></div>
                <ul className="shop-ordering">
                  <li className="current">
                    <span> Sort by price: low to high</span>
                    <ul>
                      <li>
                        <a
                          href="https://klinikar.com/shop/?orderby=popularity&amp;min_price=0&amp;max_price=2400"
                          className="">
                          Sort by popularity
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://klinikar.com/shop/?orderby=date&amp;min_price=0&amp;max_price=2400"
                          className="">
                          Sort by latest
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://klinikar.com/shop/?orderby=price&amp;min_price=0&amp;max_price=2400"
                          className="active">
                          Sort by price: low to high
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://klinikar.com/shop/?orderby=price-desc&amp;min_price=0&amp;max_price=2400"
                          className="">
                          Sort by price: high to low
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://klinikar.com/shop/?orderby=outofstock&amp;min_price=0&amp;max_price=2400"
                          className="">
                          Out of stock at the bottom
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="shop-content">
                <div className="shop-content">
                  <ul className="shop-content-column px-0 mx-0">
                    <div className="shop-content">
                      <ul className="shop-content-column px-0 mx-0">
                        {products.map((product) => (
                          <li key={product.id} className="px-0 col-lg-4">
                            <div className="product-inner">
                              <div className="product-thumbnail">
                                <a href="#">
                                  <img
                                    src={require(`../../static/assets/picture/${product.products_image}`)}
                                    alt={product.products_title}
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <div className="product-content">
                                  <div className="product_title">
                                    <a href="#">{product.products_title}</a>
                                  </div>
                                  <div className="product-price-box">
                                    <div className="price">
                                      {product.products_price}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
