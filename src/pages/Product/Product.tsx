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
  const navigate = useNavigate();
  const { carBrand } = useParams();
  const [products, setProducts] = useState([]);
  const [cars, setCars] = useState([]); // Initialize cars as an empty array
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [selectedTyreBrands, setSelectedTyreBrands] = useState([]);
  const [selectedCarBrand, setSelectedCarBrand] = useState([]);
  const [selectedCarBrandTyre, setSelectedCarBrandTyre] = useState([]);
  const [activeCarBrand, setActiveCarBrand] = useState(""); // Track the active car brand
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);

  const filterCarsByBrand = (carBrandId) => {
    // Filter cars that match the selected car brand
    return cars.filter((car) => car.carType === carBrandId);
  };
  const carBrandsList = [
    { id: "audi", label: "Audi" },
    { id: "bmw", label: "BMW" },
    { id: "bentley", label: "Bentley" },
    { id: "chevrolet", label: "Chevrolet" },
    { id: "ferrari", label: "Ferrari" },
    { id: "honda", label: "Honda" },
    { id: "hyundai", label: "Hyundai" },
    { id: "mers", label: "Mercedes-Benz" },
    { id: "mini", label: "Mini" },
    { id: "lexus", label: "Lexus" },
    { id: "madza", label: "Madza" },
    { id: "nissan", label: "Nissan" },
    { id: "perodua", label: "Perodua" },
    { id: "porsche", label: "Prosche" },
    { id: "proton", label: "Proton" },
    { id: "landRover", label: "Land Rover" },
    { id: "subaru", label: "Subaru" },
    { id: "kia", label: "Kia" },
    { id: "toyota", label: "Toyota" },
    { id: "ford", label: "Ford" },
    { id: "peugeot", label: "Peugeot" },
    { id: "volkswagen", label: "Volkswagen" },
    { id: "volvo", label: "Volvo" },
  ];
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
      setActiveCarBrand(""); // Clear the active car brand
      setSelectedTyreBrands([]);
      setShowPagination(false);
      setSelectedCarBrandTyre([]);
      navigate("/products");
      setCurrentPage(1);
    } else {
      setSelectedCarBrand([carBrand]);
      setActiveCarBrand(carBrand); // Set the active car brand
      setShowPagination(true);
      navigate(`/products/${carBrand}`);
      setCurrentPage(1);
    }
  };

  const handleCarClick = (carTypeTyre) => {
    setSelectedCarBrandTyre([carTypeTyre]);
    setSelectedCarBrand([]);
    setCurrentPage(1);
    navigate(`/products/${carBrand}/${carTypeTyre}`);
  };

  const filteredCars = filterCarsByBrand(selectedCarBrand[0]);
  const filteredProducts = products
    .filter((product) => {
      // Check if the product's tire brand is selected (selectedTyreBrands)
      const isTireBrandSelected =
        selectedTyreBrands.length === 0 ||
        selectedTyreBrands.includes(product.products_tyre_brand);

      return isTireBrandSelected;
    })
    .filter((product) => {
      const productPrice = parseFloat(product.products_price);
      return productPrice >= priceRange.min && productPrice <= priceRange.max;
    })
    .filter((product) => {
      // Check if the product's car type tire matches the selected car type tire
      if (selectedCarBrandTyre.length === 0) {
        return true; // No car type tire selected, so all products are included
      } else {
        // Use some to check if any selected car type tire matches the product's car type tire
        return selectedCarBrandTyre.some((carTypeTyre) => {
          // Split the product's car type tire into an array
          const productCarTypeTyres = product.products_car_type_tyre.split(",");

          return productCarTypeTyres.includes(carTypeTyre);
        });
      }
    });

  const carsPerPage = itemsPerPage; // Number of cars to display per page
  const productsPerPage = itemsPerPage; // Number of products to display per page

  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;

  const carsToDisplay = filteredCars.slice(startIndex, endIndex);

  const productStartIndex = (currentPage - 1) * productsPerPage;
  const productEndIndex = productStartIndex + productsPerPage;

  const productsToDisplay = filteredProducts.slice(
    productStartIndex,
    productEndIndex
  );

  useEffect(() => {
    setSelectedCarBrand(carBrand ? [carBrand] : []);
    setActiveCarBrand(carBrand || ""); // Set the active car brand from the URL parameter
  }, [carBrand]);

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
                    maxValue={2000}
                    minValue={0}
                    value={priceRange}
                    onChange={handlePriceChange}
                    formatLabel={(value) => `RM${value}`}
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
                      { id: "Arisun", label: "Arisun" },
                      { id: "Apollo", label: "Apollo" },
                      { id: "Vredestein", label: "Vredestein" },
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
                  <li className="cat-item">
                    <a
                      onClick={() => handleCarBrandClick("all")}
                      className="fw-bolder">
                      All Categories
                    </a>
                  </li>
                  {carBrandsList.map((carBrand) => (
                    <li className="cat-item" key={carBrand.id}>
                      <a
                        onClick={() => handleCarBrandClick(carBrand.id)}
                        className={`${
                          activeCarBrand === carBrand.id ? "active" : ""
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
                <div className="products-found"></div>
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
              <ul className="shop-content-column px-0 mx-0">
                <div className="shop-content">
                  <div className="shop-content-column px-0 mx-0">
                    {carsToDisplay.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className="product-car col-xs-6 col-sm-4 col-md-4 un-3-cols text-center"
                          onClick={() => handleCarClick(item.carTypeTyre)}>
                          <a
                            aria-label={`Visit product category ${item.carName}`}>
                            {item.carImage && (
                              <img
                                src={require(`../../static/assets/picture/${item.carImage}`)}
                                alt={item.carName}
                              />
                            )}
                            <p className="woocommerce-loop-category__title mb-0 mt-3">
                              {item.carName}
                            </p>
                          </a>
                        </li>
                      );
                    })}

                    {selectedCarBrand.length === 0 &&
                      productsToDisplay.map((item) => {
                        return (
                          <li key={item.id} className="px-0 col-lg-4">
                            <div className="product-inner">
                              <div className="product-thumbnail">
                                <a href={item.products_url}>
                                  <img
                                    src={require(`../../static/assets/picture/${item.products_image}`)}
                                    alt={item.products_title}
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <div className="product-content">
                                  <div className="product_title">
                                    <a href="#">{item.products_title}</a>
                                  </div>
                                  <div className="product-price-box">
                                    <div className="price">
                                      RM{item.products_price}.00
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </div>
                </div>
              </ul>
              {showPagination && (
                <div className="pagination" id="pages">
                  {Array.from({
                    length: Math.ceil(filteredCars.length / carsPerPage),
                  }).map((_, index) => {
                    const pageNumber = index + 1;
                    const isCurrentPage = currentPage === pageNumber;

                    return (
                      <button
                        key={index}
                        className={isCurrentPage ? "active" : ""}
                        onClick={() => {
                          setCurrentPage(pageNumber);
                        }}>
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div>{/* <img src={CommingSoon} /> */}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
