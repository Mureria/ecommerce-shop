import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useTheme } from "../Theme";

const Cat = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full ${
        isDarkMode
          ? "bg-[#141414] text-gray-300  "
          : "bg-slate-100 text-[#2b2b2b]"
      }`}
    >
      <div className=" flex flex-col md:flex-row gap-6 justify-between max-w-[1200px] py-16 mx-auto px-4 ">
        <div className="flex gap-10">
          <div>
            <TbTruckDelivery size={53} />
          </div>
          <div>
            <div className="  text-sm md:text-xl  font-bold">Free Shipping</div>
            <div className="font-medium text-base text-[#8f8f8f]">
              On all orders over Ksh 6,000
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <MdOutlineSupportAgent size={53} />
          </div>
          <div>
            <div className="text-[20px] text-sm md:text-xl  font-bold">
              Dedicated Support
            </div>
            <div className="font-medium text-base text-[#8f8f8f]">
              Quick response 24/7
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <RiMoneyDollarCircleLine size={53} />
          </div>
          <div>
            <div className="text-[20px] text-sm md:text-xl  font-bold">
              Money Back Guarantee
            </div>
            <div className="font-medium text-base text-[#8f8f8f]">
              Worry-free shopping
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
