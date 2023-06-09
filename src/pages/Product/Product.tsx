import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/about/footer-car.png";
import Mixitup from "../../components/Mixitup/Mixitup";
import ProductsImage1 from "../../assets/products/11.png";
import ProductsImage2 from "../../assets/products/21.png";
import ProductsImage3 from "../../assets/products/3.png";
import ProductsImage4 from "../../assets/products/4.png";
import "./product.css";

const Product = () => {
  const products = [
    {
      image: ProductsImage1,
      title: "Taiga Tyre",
      price: "RM100",
      filters: ["web", "ui"],
    },
    {
      image: ProductsImage2,
      title: "Taiga Black Oil",
      price: "RM100",
      filters: ["tyre", "ux"],
    },
    {
      image: ProductsImage3,
      title: "Taiga Wheel",
      price: "RM100",
      filters: ["ui", "branding"],
    },
    {
      image: ProductsImage4,
      title: "Taiga Seat",
      price: "RM100",
      filters: ["ux", "tyre"],
    },
  ];
  return (
    <>
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"Products"}
        bannerTarget={"Products"}
        bannerPreviousTarget={""}
        showChevron={false}
      />
      <section className="products-area pt-100 pb-70">
        <Mixitup
          isWorkPage={false}
          works={undefined}
          products={products}
        />
      </section>
    </>
  );
};

export default Product;
