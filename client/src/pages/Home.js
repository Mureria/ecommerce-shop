import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Popular from "../components/Popular";
import Marquee from "react-fast-marquee";
import Slider from "../components/Slider";
import Cat from "../components/Cat";
import Partners from "../components/Partners";
import HotCategory from "../components/HotCategory";
import Trending from "../components/Trending";
import ProductList from "../components/Products";
import { useTheme } from "../Theme";
import Search from "../components/Search";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Product from './Product';

const data = ["Nike", "Adidas", "Converse", "New Balance", "Puma", "Sketcher"];

const Home = () => {
  const [names, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { isDarkMode } = useTheme();

  const userId = "65c5c6aa571f4b806a2939fc";

  const showToastAlert = (err) => {
    toast.error(`Error: ${err}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${userId}`
        );
        setName(response.data); // Assuming the API response is an array of products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching name:", error);
      }
    };

    fetchName();
  }, []);

  const handleBrandClick = async (brand) => {
    try {
      const encodedBrand = encodeURIComponent(brand.toLowerCase()).replace(
        /%20/g,
        "%2520"
      );
      const response = await axios.get(
        `http://localhost:5000/products/get/tag?brand=${encodedBrand}`
      );
      setProducts(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error("No products found:", error);
      showToastAlert(error.response.data);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center md:text-3xl ">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto my-2 space-y-4 px-4">
          <h3 className="text-2xl md:mt-10 ">Hi, {names.firstName}</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Step Up Your Shoe Game With Our Premium Shoes.
          </h1>
          <div className="">
            <Search />
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto justify-between my-3 hidden md:flex">
          {data.map((item, index) => (
            <Link
              to={""}
              key={index}
              onClick={() => handleBrandClick(item)}
              className={` px-6 py-2 rounded-full cursor-pointer ${
                isDarkMode
                  ? "shadow-sm shadow-[#202020] hover:-translate-y-1 duration-500 text-[#707070]"
                  : "shadow-md hover:-translate-y-1  duration-500 font-medium"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="max-w-[1200px] mx-auto my-2 px-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product, index) => {
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

        <div className="w-full my-4">
          <HotCategory />
        </div>

        <div className="mt-16">
          <Popular />
        </div>

        <div
          className={`w-full  my-20 ${
            isDarkMode ? "bg-[#141414] " : "bg-slate-100"
          }`}
        >
          <div className="max-w-[1200px] mt-8 md:mt-32 mx-auto px-4 py-16">
            <div className="flex flex-col-reverse  md:flex-row gap-4 ">
              <div className="flex flex-col justify-center items-center md:items-start">
                <h1 className="pb-10 md:pb-20 text-3xl md:text-5xl font-bold text-center md:text-start">
                  Shop through our collection
                </h1>
                <Link
                onClick={() => window.scrollTo(0, 0)}
                 to="collection">
                  
                  <p className="font-medium text-base md:text-base border border-gray-800 py-3 px-5 rounded-md hover:bg-black hover:text-white ease-in-out duration-700">
                    Shop now
                  </p>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <Trending />
      </div>

      <div
        className={`w-full  rounded-md shadow-xl px-10 mt-32 ${
          isDarkMode ? "bg-slate-200" : ""
        }`}
      >
        <Marquee>
          <Slider />
        </Marquee>
      </div>

      <div className="w-full my-32">
        <ProductList title="Trending" />
      </div>

      <div className="">
        <Cat />
      </div>
      <div className="mt-32">
        <ProductList title="Sale" />
      </div>

      <div className="w-full mt-32">
        <Partners />
      </div>
    </>
  );
};

export default Home;
