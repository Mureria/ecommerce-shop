// ProductList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data); // Assuming the API response is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-[1200px] mt-6 mx-auto px-4">
        <h1 className="text-2xl font-bold py-4 md:text-4xl">Popular</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => {
            return (
              <div key={product._id} className="shadow-md hover:shadow-lg">
                <Link to={`/product/${product._id}`}>
                  <img
                    className="	w-full  object-contain h-36"
                    src={product.image}
                    alt=""
                  />
                  <h1 className="text-lg px-2">{product.name}</h1>
                  <h1 className="text-base font-normal text-gray-400 px-2 pb-6">{product.category.name}</h1>
                  <h1 className="text-xl font-bold px-2 pb-6">Kshs. {product.price}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
