import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTheme } from "../Theme";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  if (loading || !products.length) {
    return (
      <div className="flex h-screen items-center justify-center md:text-3xl ">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-[1200px] mt-6 mx-auto px-4">
        <h1 className="text-2xl font-bold py-4 md:text-4xl">{props.title}</h1>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {[...products, ...products, ...products]
              .slice(currentIndex, currentIndex + 5)
              .map((product, index) => {
                return (
                  <div key={index} className="shadow-md hover:shadow-lg">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={`/product/${product._id}`}
                    >
                      <img
                        className="object-cover h-[150px] w-full"
                        src={product.image}
                        alt=""
                      />
                      <h1
                        className={`text-lg px-2 py-3 ${
                          isDarkMode ? "text-[#707070]" : ""
                        }`}
                      >
                        {product.name}
                      </h1>
                      {/* <h1 className={`text-base font-normal text-gray-400 px-2 pb-6 ${isDarkMode ? 'text-[#707070]' : ''}`}>
                    {product.category.name}
                  </h1> */}
                      <h1
                        className={`text-sm px-2 text-decoration-line: line-through ${
                          isDarkMode ? "text-[#707070]" : ""
                        }`}
                      >
                        Kshs. {product.oldPrice.toLocaleString()}
                      </h1>
                      <h1
                        className={`text-xl font-bold px-2 pb-6 ${
                          isDarkMode ? "text-[#707070]" : ""
                        }`}
                      >
                        Kshs. {product.currentPrice.toLocaleString()}
                      </h1>
                    </Link>
                  </div>
                );
              })}
          </div>

          <div className=" absolute w-full top-[24%]">
            <div className="flex justify-between text-2xl text-slate-200 font-bold text-center ">
              <div
                className="flex w-7 h-7 rounded-full bg-black/40 items-center"
                onClick={prevSlide}
              >
                <GrFormPrevious />
              </div>
              <div
                className="flex w-7 h-7 rounded-full bg-black/40 items-center"
                onClick={nextSlide}
              >
                <MdNavigateNext />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
