import React from "react";
import ProductCard from "../components/ProductCard";
import Description from "../components/Description";

const Product = () => {
  return (
    <>
      {/* Product Card */}
      <ProductCard />

      {/* Description */}
      <div className="w-full h- my-0  ">
        <div className="max-w-[1200px] mx-auto my-2 mb-4 px-4 py-4 ">
          <Description />
        </div>
      </div>
    </>
  );
};

export default Product;
