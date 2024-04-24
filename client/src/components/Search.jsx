import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTheme } from "../Theme";
import { data } from "../assets/data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useTheme();

  const showToastAlert = (err) => {
    toast.error(`Error: ${err}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const fetchProducts = async (searchQuery) => {
    setLoading(true);
    try {
      const encodedQuery = encodeURIComponent(
        searchQuery.toLowerCase()
      ).replace(/%20/g, "%2520");
      const response = await axios.get(
        `http://localhost:5000/products/get/tag?brand=${encodedQuery}`
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
      showToastAlert(error.response.data.error);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchProducts(value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log(searchTerm);
  };

  return (
    <div className="max-w-[1200px] relative">
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search..."
          className={`border bg-inherit outline-none my- rounded px-4 py-2 mr-2 ${
            isDarkMode ? "" : "border-slate-300"
          }`}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      <div
        className={`absolute top-[43px] cursor-pointer w-[215px]  text-sm ${
          isDarkMode ? "bg-[#101010]" : "text-slate-900 bg-slate-100 "
        }`}
      >
        {data
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const brand = item.brandName.toLowerCase();
            return (
              searchTerm && brand.includes(searchTerm) && brand !== searchTerm
            );
          })
          .slice(0, 5)
          .map((item) => {
            return (
              <div
                onClick={() => onSearch(item.brandName)}
                className={` cursor-pointer py-1 px-6  text-sm ${
                  isDarkMode
                    ? "bg-[#101010] hover:bg-[#202020]"
                    : "text-slate-900 bg-slate-100 hover:bg-slate-200"
                }`}
                key={item.brandName}
              >
                <p>{item.brandName}</p>
              </div>
            );
          })}
      </div>

      {/* Render products */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-10">
        {loading ? (
          <div>Loading...</div>
        ) : (
          products.map((product, index) => (
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
                  className={`text-lg px-2 pt-3 ${
                    isDarkMode ? "text-[#707070]" : ""
                  }`}
                >
                  {product.name}
                </h1>
                <h1
                  className={`text-sm px-2 pb-2 ${
                    isDarkMode ? "text-[#707070]" : ""
                  }`}
                >
                  {product.brand}
                </h1>
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
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
