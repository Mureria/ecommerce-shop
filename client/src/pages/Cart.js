import React from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Like from "../components/Like";
import { Link } from "react-router-dom";

const Cart = () => {



  return (
    <>
      <div className="w-full ">
        <div className="max-w-[1200px] mx-auto my-4 mb-10 px-4">
          {/* Header */}
          <div className="hidden md:flex  bg-slate-100 gap-3 px-4 py-4 rounded-sm text-xl font-medium">
            <div className="basis-[30%]">
              <p>Item</p>
            </div>
            <div className="basis-[20%] text-center">
              <p>Unit Price</p>
            </div>
            <div className="basis-[20%] text-center">
              <p>Quantity</p>
            </div>
            <div className="basis-[20%] text-center">
              <p>Amount</p>
            </div>
            <div className="basis-[10%]"></div>
          </div>

          {/* product */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center bg-slate-100 gap-3 px-4 py-4 rounded-sm mt-4">
            <div className="basis-[30%]">
              <div className="flex h-full flex-1 items-start gap-3">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                    className="h-[100px] w-[100px]  object-cover"
                  />
                </div>
                <div className="w-[243px] m-0">
                  <p className="text-base">
                    Men's artificial leather shoes Business casual shoes
                    outdoor...
                  </p>
                  <p className="text-sm text-[#909399]">41 Black</p>
                  <p className="text-sm text-[#909399]">Qty 1</p>
                </div>
              </div>
            </div>

            <div className="basis-[20%] text-center">
              <p className="text-base">KSh 1,399</p>
              <p className="text-sm line-through">KSh 1,399</p>
            </div>

            <div className="flex basis-[20%] text-center justify-center">
              <div className="border bg-slate-300 py-1 px-1">
                <FiMinus />
              </div>
              <div className=" border-slate-300 border-y py-0 px-7 text-[#333333]">
                1
              </div>
              <div className="border  bg-slate-300 py-1 px-1  ">
                <GoPlus />
              </div>
            </div>

            <div className="basis-[20%] text-center">
              <p className="text-base">KSh 1,399</p>
            </div>

            <div className="basis-[10%] text-center">
              <p className="text-sm text-[#909399]">Add to Wish</p>
              <p className="text-sm text-[#ff4444]">Delete</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-center bg-slate-100 gap-3 px-4 py-4 rounded-sm mt-4">
            <div className="basis-[30%]">
              <div className="flex h-full flex-1 items-start gap-3">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                    className="h-[100px] w-[100px]  object-cover"
                  />
                </div>
                <div className="w-[243px] m-0">
                  <p className="text-base">
                    Men's artificial leather shoes Business casual shoes
                    outdoor...
                  </p>
                  <p className="text-sm text-[#909399]">41 Black</p>
                  <p className="text-sm text-[#909399]">Qty 1</p>
                </div>
              </div>
            </div>

            <div className="basis-[20%] text-center">
              <p className="text-base">KSh 1,399</p>
              <p className="text-sm line-through">KSh 1,399</p>
            </div>

            <div className="flex basis-[20%] text-center justify-center">
              <div className="border bg-slate-300 py-1 px-1">
                <FiMinus />
              </div>
              <div className=" border-slate-300 border-y py-0 px-7 text-[#333333]">
                2
              </div>
              <div className="border  bg-slate-300 py-1 px-1  ">
                <GoPlus />
              </div>
            </div>

            <div className="basis-[20%] text-center">
              <p className="text-base">KSh 1,399</p>
            </div>

            <div className="basis-[10%] text-center">
              <p className="text-sm text-[#909399]">Add to Wish</p>
              <p className="text-sm text-[#ff4444]">Delete</p>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="flex justify-between items-center">
            <div className="hidden md:flex" />
            <div className="flex  flex-col w-[400px] justify-center  py-4">
              <div className="border-b border-slate-200 pb-3">
                <p className="text-sm font-medium">CART SUMMARY</p>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-3 pt-3">
                <p className="text-sm font-medium">Subtotal</p>
                <p className="text-xl font-medium">Ksh. 2000</p>
              </div>
              <Link
                to="/checkout"
                className="text-center w-full bg-orange-400 px-14 py-4 mt-4"
              >
                Checkout
              </Link>
            </div>
          </div>

          {/* You may also like */}
          <Like />
        </div>
      </div>
    </>
  );
};

export default Cart;
