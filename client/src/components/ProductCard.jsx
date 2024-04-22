import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useTheme } from "../Theme";
import SizeSelector from "./Size";




const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams(); // Get the product ID from the URL parameter
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);

  const { isDarkMode } = useTheme();
  const isLogged = true;



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center md:text-3xl ">
        Loading...
      </div>
    );
  }

  if (!products) {
    return <div>Product not found</div>;
  }


  return (
    <>
      {products && (
        <div className="w-full h- my-0" onClick={window.scrollTo(0, 0)}>
          <div
            className={`max-w-[1200px] mx-auto my-2 mb-4 px-4 py-4 rounded-md ${
              isDarkMode ? "bg-[#141414] text-white" : " bg-slate-100"
            }`}
          >
            <div className="flex gap-4 flex-col md:flex-row p-4 justify-between items-start">
              <div className="">
                <img
                  src={products.image}
                  alt=""
                  className=" w-[500px] h-[300px] md:h-[500px]  object-cover"
                />
              </div>

              <div className="flex flex-col flex-1">
                <h1 className="text-2xl">{products.name}</h1>
                <p className="text-x text-orange-400 inline-block">****</p>
                <p className="text-xl text-blue-500 pb-2">41 customer reviews</p>

                <div className={`flex justify-between md:justify-start md:gap-4 p-2  items-baseline ${isDarkMode ? 'bg-[#0C0C0C]' : 'bg-slate-200'}`}>
                  <p className="text-2xl text-orange-600">
                    Ksh {products.currentPrice.toLocaleString()}
                  </p>
                  <p className="text-sm text-[#909399 line-through">
                    KSh {products.oldPrice.toLocaleString()}
                  </p>
                  <p className="text-xs bg-orange-400 px-3  py-1 rounded-md">
                    {products.discount}% OFF
                  </p>
                </div>

                <div className="flex flex-col space-y-10 mt-6">
                  <div className="flex gap-10 text-sm ">
                    <p>Shipping From:</p>
                    <p>Local Dispatch</p>
                  </div>
                  <div>
                  <SizeSelector/>
                  </div>
                  <div className="flex gap-10">
                    <p>Qty:</p>
                   <div className="flex items-center">
                    <button
                      onClick={() => setCount(count > 1 ? count - 1 : 1)}
                      className="border py-1 px-1  "
                    >
                      <FiMinus />
                    </button>
                    <div className="  border-y py-0 px-7">{count}</div>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="border py-1 px-1"
                    >
                      <GoPlus />
                    </button>
                  </div>
                  </div>

                </div>

                <div>
                  {isLogged ? (
                    <div className="flex flex-col md:flex-row gap-4 mt-14 mb-4 text-center font-bold">
                      <button  className="w-full md:w-6/12 border-orange-400 py-4 px-3 border ">
                        <Link to="tel:+254797516617" target="_blank" className="">
                          Call now
                        </Link>
                      </button>

                      <button className="w-full md:w-6/12 py-4 px-3 bg-[#25D366]" >
                        <Link to={'https://wa.me/+254797516617'} target="_blank" className=" ">
                         Enquire via whatsapp
                        </Link>
                      </button>
                      
                    </div>
                  ) : (
                    <div className="flex flex-col  md:flex-row mt-10 pb-6 border-b border-black/10">
                      <div>
                        <Link
                          to="/"
                          className="w-full md:w-6/12 border mb-4 md:mb-0 border-orange-400 px-14 py-4 mr-4"
                        >
                          Add to Cart
                        </Link>
                      </div>

                      <div>
                        <Link
                        target=""
                          
                          className=" w-full md:w-6/12 bg-orange-400 px-14 py-4"
                        >
                          Enquire via whatsapp
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex gap-4">
                  <p>Payment:</p>
                  <p>Mpesa, Airtel, lipapay, kcb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
