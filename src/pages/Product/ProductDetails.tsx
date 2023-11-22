import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductList } from "src/apiEndpoints";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../static/assets/about/about-taiga.png";
import Loader from "src/components/Loader/Loader";
import ButtonMain from "src/components/Button/Button";
import NumericInput from "react-numeric-input";

const ProductDetails = () => {
  const { products_url } = useParams<{ products_url: string }>();
  const [productDetails, setProductDetails] = useState<any>(null);

  useEffect(() => {
    getProductList()
      .then((response) => {
        const product = response.data.find(
          (product: any) => product.products_url === products_url
        );
        console.log("Product found:", product);
        if (product) {
          setProductDetails(product);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [products_url]);

  if (!productDetails) {
    return <Loader />;
  }

  return (
    <>
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"Products"}
        bannerTarget={"Products"}
        bannerPreviousTarget={""}
        showChevron={false}
      />
      <div className="container">
        <div className="row product-details-area p-5">
          <div className="content-area">
            <ul className="shop-toolbar multiple mb-4 mt-4">
              <li>
                <Link to="/" className="text-black">
                  Home
                </Link>
              </li>
              <li style={{ height: "20px" }}>
                <i className="bx bx-chevron-right"></i>
              </li>
              <li>
                <Link to="/products" className="text-black">
                  Products
                </Link>
              </li>
              <li style={{ height: "20px" }}>
                <i className="bx bx-chevron-right"></i>
              </li>
              <li>
                <a>{productDetails.products_title}</a>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <img
              src={require(`../../static/assets/picture/${productDetails.products_image}`)}
              alt={productDetails.products_title}
            />
          </div>
          <div className="col-7">
            <div className="entry-product-header">
              {productDetails.products_title}
            </div>
            <div className="entry-price">
              RM{productDetails.products_price}
              <del className="ps-2">
                <span>
                  <bdi>
                    <span>{productDetails.products_oriPrice}</span>
                  </bdi>
                </span>
              </del>
            </div>
            <div className="summary-meta">
              <p>
                <label>Status:</label>32 in stock
              </p>
            </div>
            <div className="notice">
              Notice: Purchasing directly from our panel outside of Taiga Auto
              may impact guarantees. To ensure you receive the best value,
              service, and consistent warranty, buy through Taiga Auto. We're
              here to deliver peace of mind and safer journeys.
            </div>
            <div className="quantity mb-4">
              <label>Quantity:</label>
              <NumericInput
                mobile
                min={1}
                max={50}
                value={1}
                className="form-control"
              />
            </div>
            <ButtonMain text={"Add To Cart"} />
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <img
                src={require(`../../static/assets/picture/${productDetails.products_imageBenefit}`)}
              />
            </div>
            <div className="col-6">
              <img
                src={require(`../../static/assets/picture/${productDetails.products_imageDescription}`)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
