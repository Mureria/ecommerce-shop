import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Review from "./Review";

const Description = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setProducts(response.data); // Assuming the API response is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [id]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="flex  items-center  mx-auto  bg-transparent mt-5 border-b">
        <button
          className={`px-5 py-2 mr-2  ${
            activeTab === 1 ? "bg-orange-400" : "bg-transparent-200"
          }`}
          onClick={() => handleTabClick(1)}
        >
          <h1>Description</h1>
        </button>
        <button
          className={`px-8 py-2 mr-2 ${
            activeTab === 2 ? "bg-orange-400 " : "bg-transparent"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Reviews
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 1 && (
          <div className="p-2 ">
            <h1 className="font-bold text-lg pb-6">Product Description</h1>
            <p className="text-sm">{products.description}</p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <Review />
          </div>
        )}
      </div>
    </>
  );
};

export default Description;
