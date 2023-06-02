import React from "react";
import ButtonMain from "../../components/Button/Button";
import ProductsImage1 from "../../assets/products/11.png";
import ProductsImage2 from "../../assets/products/21.png";
import ProductsImage3 from "../../assets/products/3.png";
import ProductsImage4 from "../../assets/products/4.png";

const HomepageParts = () => {
  const products = [
    {
      partsImage: ProductsImage1,
      partsTitle: "Taiga Tyre",
      partsPrice: "RM100",
    },
    {
      partsImage: ProductsImage2,
      partsTitle: "Taiga Black Oil",
      partsPrice: "RM100",
    },
    {
      partsImage: ProductsImage3,
      partsTitle: "Taiga Wheel",
      partsPrice: "RM100",
    },
    {
      partsImage: ProductsImage4,
      partsTitle: "Taiga Seat",
      partsPrice: "RM100",
    },
  ];
  return (
    <>
      <div className="row">
        {products.map((part, index) => (
          <div key={index} className="col-sm-6 col-lg-3">
            <div className="products-item">
              <div className="products-top">
                <img src={part.partsImage} alt="products" />
              </div>
              <h3>{part.partsTitle}</h3>
              <span>{part.partsPrice}</span>
              <ButtonMain text="Learn More" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomepageParts;
