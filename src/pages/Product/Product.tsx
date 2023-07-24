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
  const [filterProducts, setFilterProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const mixer = mixitup(container, {
  //     selectors: {
  //       control: ".filter",
  //     },
  //   });

  //   return () => {
  //     mixer.destroy();
  //   };
  // }, [products]);

  useEffect(() => {
    // Update the filter logic when activeFilter changes
    if (activeFilter === "all") {
      // If activeFilter is "all", show all products
      setFilterProducts(products);
    } else {
      // Otherwise, filter the products based on activeFilter
      const filteredProducts = products.filter((product) =>
        product.filters.includes(activeFilter)
      );
      setFilterProducts(filteredProducts);
    }
  }, [activeFilter, products]);

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filterProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleFilterSelection = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset the current page to 1 when a filter is selected
  };

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
                handleFilterSelection("all");
              }}>
              all
            </li>
            <li
              className={`filter ${activeFilter === "wheels" ? "active" : ""}`}
              data-filter=".wheels"
              onClick={() => handleFilterSelection("wheels")}>
              wheels
            </li>
            <li
              className={`filter ${activeFilter === "brakes" ? "active" : ""}`}
              data-filter=".brakes"
              onClick={() => handleFilterSelection("brakes")}>
              brakes
            </li>
            <li
              className={`filter ${activeFilter === "oil" ? "active" : ""}`}
              data-filter=".oil"
              onClick={() => handleFilterSelection("oil")}>
              black oil
            </li>
            <li
              className={`filter ${activeFilter === "tyre" ? "active" : ""}`}
              data-filter=".tyre"
              onClick={() => handleFilterSelection("tyre")}>
              tyre
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row" ref={containerRef}>
            {currentProducts.map((product, index) => (
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
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
            <button
              disabled={currentProducts.length < productsPerPage}
              onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
