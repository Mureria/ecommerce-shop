import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Pagination = () => {
  return (
    <>
      <div className="flex gap-1 justify-center items-center my-3 md:my-6 ">
        <p className=" px-1 py-1 md:px-1 md:py-1 bg-slate-200 rounded-sm">
          <IoIosArrowBack />
        </p>
        <p className=" px-2 py-0 md:px-2 md:py-0 bg-orange-500 rounded-sm">1</p>
        <p className=" px-2 py-0 md:px-2 md:py-0 bg-slate-200 rounded-sm">2</p>
        <p className=" px-2 py-0 md:px-2 md:py-0 bg-slate-200 rounded-sm">3</p>
        <p className=" px-2 py-0 md:px-2 md:py-0 bg-slate-200 rounded-sm">4</p>
        <p className=" px-2 py-0 md:px-2 md:py-0 bg-slate-200 rounded-sm">5</p>
        <p className=" px-1 py-1 md:px-1 md:py-1 bg-slate-200 rounded-sm">
          <IoIosArrowForward />
        </p>
      </div>
    </>
  );
};

export default Pagination;
