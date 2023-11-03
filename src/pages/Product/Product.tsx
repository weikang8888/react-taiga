import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputRange from "react-input-range";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../static/assets/about/about-taiga.png";
import "react-input-range/lib/css/index.css";
import "./product.css";
import Loader from "../../components/Loader/Loader";
import PriceRangeDisplay from "./PriceRangeDisplay";
import { getProductList, getCarList } from "src/apiEndpoints";
import CommingSoon from "../../static/assets/image/coming-soon-campaign.png";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [cars, setCars] = useState([]); // Initialize cars as an empty array
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [selectedTyreBrands, setSelectedTyreBrands] = useState([]);
  const [selectedCarBrand, setSelectedCarBrand] = useState([]);

  const navigate = useNavigate();
  const { carBrand } = useParams();

  const filterCarsByBrand = (carBrandId) => {
    // Filter cars that match the selected car brand
    return cars.filter((car) => car.carType === carBrandId);
  };
  const filteredCars = filterCarsByBrand(selectedCarBrand[0]);

  useEffect(() => {
    getProductList()
      .then((registrationResponse) => {
        setProducts(registrationResponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCarList()
      .then((registrationResponse) => {
        setCars(registrationResponse.data);
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
    const tyreBrand = event.target.value;

    if (selectedTyreBrands.includes(tyreBrand)) {
      // Brand is already selected, remove it
      setSelectedTyreBrands(
        selectedTyreBrands.filter(
          (selectedBrand) => selectedBrand !== tyreBrand
        )
      );
    } else {
      // Brand is not selected, add it
      setSelectedTyreBrands([...selectedTyreBrands, tyreBrand]);
    }
  };

  const handleCarBrandClick = (carBrand) => {
    if (carBrand === "all") {
      // If "All Categories" is clicked, clear the selected car brands and tire brands, and navigate
      setSelectedCarBrand([]);
      setSelectedTyreBrands([]);
      navigate("/products");
    } else {
      setSelectedCarBrand([carBrand]); // Select the clicked car brand and deselect others
      navigate(`/products/${carBrand}`);
    }
  };

  const handleCarClick = () => {};

  const filteredProducts = products
    .filter((product) => {
      // Check if the product's tire brand is selected (selectedTyreBrands)
      const isTireBrandSelected =
        selectedTyreBrands.length === 0 ||
        selectedTyreBrands.includes(product.products_tyre_brand);

      // Split the product's car brands into an array
      const carBrandsArray = product.products_car_type_tyre
        .split(",")
        .map((carBrand) => carBrand.trim());

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
    setSelectedCarBrand(carBrand ? [carBrand] : []);
  }, [carBrand]);

  // Inside your component's return statement, use the filtered cars

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
                    {[
                      { id: "ToyoTires", label: "Toyo Tires" },
                      { id: "Michelin", label: "Michelin" },
                      { id: "Continental", label: "Continental" },
                      { id: "BridgeStone", label: "BridgeStone" },
                    ].map((tyreBrand) => (
                      <li
                        className="widget-layered-nav-list__item"
                        key={tyreBrand.id}>
                        <label className="custom-checkbox">
                          <input
                            type="checkbox"
                            value={tyreBrand.id}
                            checked={selectedTyreBrands.includes(tyreBrand.id)}
                            onChange={handleTyreBrandChange}
                          />
                          <span className="checkbox-label">
                            {tyreBrand.label}
                          </span>
                        </label>
                      </li>
                    ))}
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
                    { id: "haval", label: "Haval" },
                    { id: "honda", label: "Honda" },
                    { id: "hyundai", label: "Hyundai" },
                    { id: "mers", label: "Mercedes-Benz" },
                    { id: "mini", label: "Mini" },
                    { id: "lexus", label: "Lexus" },
                    { id: "madza", label: "Madza" },
                  ].map((carBrand) => (
                    <li className="cat-item" key={carBrand.id}>
                      <a
                        onClick={() => handleCarBrandClick(carBrand.id)}
                        className={`${
                          selectedCarBrand.includes(carBrand.id) ? "active" : ""
                        }`}>
                        {carBrand.label}
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
                  {/* <strong>{filteredProducts.length}</strong>
                  {filteredProducts.length === 1
                    ? "Product found"
                    : "Products found"} */}
                </div>

                <div className="shop-view"></div>
                <ul className="shop-ordering">
                  {/* <li className="current">
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
                  </li> */}
                </ul>
              </div>

              {/*<div className="">
                <ul className="shop-content-column px-0 mx-0">
                  <div className="shop-content">
                    <ul className="shop-content-column px-0 mx-0">
                      {selectedCarBrand.length > 0 &&
                        filteredCars.map((car) => (
                          <li
                            key={car.id}
                            className="product-car col-xs-6 col-sm-4 col-md-4 un-3-cols"
                            onClick={handleCarClick}>
                            <a
                              aria-label={`Visit product category ${car.carName}`}
                              href="">
                              <img
                                src={require(`../../static/assets/picture/${car.carImage}`)}
                                alt={car.carName}
                              />
                              <p className="woocommerce-loop-category__title">
                                {car.carName} <mark className="count">(2)</mark>{" "}
                              </p>
                            </a>
                          </li>
                        ))}

                      {selectedCarBrand.length === 0 &&
                        filteredProducts.map((product) => (
                          <li key={product.id} className="px-0 col-lg-4">
                            <div className="product-inner">
                              <div className="product-thumbnail">
                                <a href={product.products_url}>
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
            <div>
            */}
              <img src={CommingSoon} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
