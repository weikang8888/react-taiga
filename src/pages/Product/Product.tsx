import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import InputRange from "react-input-range";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../static/assets/about/footer-car.png";
import "react-input-range/lib/css/index.css";
import "./product.css";
import Loader from "../../components/Loader/Loader";
import PriceRangeDisplay from "./PriceRangeDisplay";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [selectedTyreBrands, setSelectedTyreBrands] = useState([]);
  const [selectedCarBrand, setSelectedCarBrand] = useState([]);
  const navigate = useNavigate();
  const { brand } = useParams();

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

  // Handle changes in the price range
  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const handleTyreBrandChange = (event) => {
    const brand = event.target.value;

    if (selectedTyreBrands.includes(brand)) {
      // Brand is already selected, remove it
      setSelectedTyreBrands(
        selectedTyreBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      // Brand is not selected, add it
      setSelectedTyreBrands([...selectedTyreBrands, brand]);
    }
  };
  
  const handleCarBrandClick = (brand) => {
    if (brand === "all") {
      // If "All Categories" is clicked, clear the selected car brands and tire brands, and navigate
      setSelectedCarBrand([]);
      setSelectedTyreBrands([]);
      navigate("/products");
    } else {
      setSelectedCarBrand([brand]); // Select the clicked car brand and deselect others
      navigate(`/products/${brand}`);
    }
  };

  const filteredProducts = products
    .filter((product) => {
      // Check if the product's tire brand is selected (selectedTyreBrands)
      const isTireBrandSelected =
        selectedTyreBrands.length === 0 ||
        selectedTyreBrands.includes(product.products_tyre_brand);

      // Split the product's car brands into an array
      const carBrandsArray = product.products_car_type_tyre
        .split(",")
        .map((brand) => brand.trim());

      // Check if at least one of the selected car brands is present in the product's car brands
      const isCarBrandSelected =
        selectedCarBrand.length === 0 ||
        selectedCarBrand.some((selectedBrand) =>
          carBrandsArray.includes(selectedBrand)
        );
      // Combine both conditions with logical AND (&&)
      return isTireBrandSelected && isCarBrandSelected;
    })
    .filter((product) => {
      const productPrice = parseFloat(product.products_price);
      return productPrice >= priceRange.min && productPrice <= priceRange.max;
    });

  useEffect(() => {
    setSelectedCarBrand(brand ? [brand] : []);
  }, [brand]);

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
                        <input
                          type="checkbox"
                          value="ToyoTires"
                          checked={selectedTyreBrands.includes("ToyoTires")}
                          onChange={handleTyreBrandChange}
                        />
                        <span className="checkbox-label">Toyo Tires</span>
                      </label>
                    </li>

                    <li className="widget-layered-nav-list__item">
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="Michelin"
                          checked={selectedTyreBrands.includes("Michelin")}
                          onChange={handleTyreBrandChange}
                        />
                        <span className="checkbox-label">Michelin</span>
                      </label>
                    </li>
                    <li className="widget-layered-nav-list__item">
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="Continental"
                          checked={selectedTyreBrands.includes("Continental")}
                          onChange={handleTyreBrandChange}
                        />
                        <span className="checkbox-label">Continental</span>
                      </label>
                    </li>
                    <li className="widget-layered-nav-list__item">
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="BridgeStone"
                          checked={selectedTyreBrands.includes("BridgeStone")}
                          onChange={handleTyreBrandChange}
                        />
                        <span className="checkbox-label">BridgeStone</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <h4 className="widget-title">Categories</h4>
                <ul className="product-categories p-0">
                  {selectedCarBrand.length > 0 && (
                    <li className="cat-item">
                      <a
                        onClick={() => handleCarBrandClick("all")}
                        className="fw-bolder">
                        All Categories
                      </a>
                    </li>
                  )}
                  {[
                    { id: "audi", label: "Audi" },
                    { id: "bmw", label: "BMW" },
                    { id: "bentley", label: "Bentley" },
                    { id: "chevrolet", label: "Chevrolet" },
                    { id: "ferrari", label: "Ferrari" },
                  ].map((brand) => (
                    <li className="cat-item" key={brand.id}>
                      <a
                        onClick={() => handleCarBrandClick(brand.id)}
                        className={`${
                          selectedCarBrand.includes(brand.id) ? "active" : ""
                        }`}>
                        {brand.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="content-area col-md-9 col-sm-12 col-xs-12">
              <div
                id="mf-catalog-toolbar"
                className="shop-toolbar multiple mb-4">
                <div className="products-found">
                  <strong>{filteredProducts.length}</strong>
                  {filteredProducts.length === 1
                    ? "Product found"
                    : "Products found"}
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

              <div className="">
                <ul className="shop-content-column px-0 mx-0">
                  <div className="shop-content">
                    <ul className="shop-content-column px-0 mx-0">
                      {filteredProducts.map((product) => (
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
                                    RM{product.products_price}.00
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
      </section>
    </>
  );
};

export default Product;
