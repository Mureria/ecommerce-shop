import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Popular from "../components/Popular";
import Marquee from "react-fast-marquee";
import Slider from "../components/Slider";
import Cat from "../components/Cat";
import Partners from "../components/Partners";
import HotCategory from "../components/HotCategory";
import Trending from "../components/Trending";
import ProductList from "../components/Products";
import { useTheme } from "../Theme";
// import Product from './Product';

const data = ["Nike", "Adidas", "New Armor", "Converse", "New Balance"];

const Home = () => {
  const [names, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const { isDarkMode } = useTheme();

  const userId = "65c5c6aa571f4b806a2939fc";

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
        <div className="max-w-[1200px] mx-auto my-2 px-4">
          <h3 className="text-2xl py-2">Hi, {names.firstName}</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Step Up Your Shoe Game With Our Premium Shoes.
          </h1>
        </div>
        <div className={`max-w-[400px] mx-4 md:mx-24 my-2  flex items-center justify-between px-4 rounded-md   md: lg:my-8  border ${isDarkMode ? 'border-gray-900 text-gray-400' : ''}`}>
          <form action="">
            <input
              type="text"
              placeholder="Search Shoe"
              className={`max-w-[400px] mx-auto my-2  outline-none text-sm py-1 bg-inherit`}
            />
          </form>
          <FaSearch className={`${isDarkMode ? 'text-gray-800' : 'text-slate-300'}`} />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 justify-between my-10 hidden md:flex">
          {data.map((item) => (
            <p className={`border px-8 py-2 rounded-full hover:border-yellow-300${isDarkMode ? ' border-gray-900': ''}`}>
              {item}
            </p>
          ))}
        </div>

        <div className="w-full my-10">
          <HotCategory />
        </div>
        
        <div className="mt-16">
        <Popular  />
        </div>
       

        <div
          className={`w-full  my-20 ${
            isDarkMode ? "bg-[#141414] " : "bg-slate-100"
          }`}
        >
          <div className="max-w-[1200px] mt-32 mx-auto px-4 py-16">
            <div className="flex flex-col-reverse  md:flex-row gap-4 ">
              <div className="flex flex-col justify-center items-start">
                <h1 className="pb-10 md:pb-20 text-3xl md:text-5xl font-bold">
                  Shop through our collection
                </h1>
                <Link to="collection">
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
        <Trending  />
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
        <ProductList  title='Trending' />
      </div>

      <div className="">
        <Cat />
      </div>
      <div className="mt-32">
        <ProductList title='Sale' />
      </div>

      <div className="w-full mt-32">
        <Partners/>
      </div>
      
    </>
  );
};

export default Home;
