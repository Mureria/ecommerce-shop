import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../Theme";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useTheme();

  // const id = '65c5d2be571f4b806a293a4d'

  const showToastAlert = (err) => {
    toast.error(`Error: ${err}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

const handleDelete = async () => {
  try {
    await axios.delete(`http://localhost:5000/products/65c5d2be571f4b806a293a4d`);
    toast.success("Deleted Successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
    showToastAlert(error.response.data.error);
  }
};



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/orderitems/66284ec26f1da561fecbe8aa`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        alert(error.response.data.error)
      }
    };

    fetchProducts();
  }, []); // <-- Empty dependency array to run the effect only once

  return (
    <div className="max-w-[1200px] mx-auto my-2">
      {loading ? (
        <div>Loading...</div>
      ) : (
        products.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start md:items-center justify-center gap-3 px-4 py-4 rounded-sm mt-4 ${
              isDarkMode ? "bg-[#141414]" : "bg-slate-100"
            }`}
          >
            <div className="basis-[30%]">
              <div className="flex h-full flex-1 items-center gap-3">
                <div>
                  <img
                    src={product.image}
                    alt=""
                    className="h-[100px] w-[100px]  object-cover"
                  />
                </div>
                <div className="w-[243px] m-0">
                  <p className="text-base">{product.name}</p>
                  <p className="text-sm text-[#abadb1]">41 Black</p>
                  <p className="text-sm text-[#909399]">Qty 1</p>
                </div>
              </div>
            </div>

            <div className="basis-[20%] text-center">
              <p className="text-base">Ksh {product.currentPrice}</p>
              <p className="text-sm line-through">KSh {product.oldPrice}</p>
            </div>

            <div className="flex basis-[20%] text-center justify-center">
              <div className=" py-0 px-7 text-[#909399]">1</div>
            </div>

            <div className="basis-[20%] text-center">
              <p className="text-base">KSh {product.currentPrice}</p>
            </div>

            <div className="basis-[10%] md:text-center ">
              <button
                onClick={() => {}}
                className="text-sm text-[#909399] hover:underline w-full "
              >
                Add to Wish
              </button>
              <button
                onClick={handleDelete}
                className="text-sm text-[#ff4444] hover:underline w-full "
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
