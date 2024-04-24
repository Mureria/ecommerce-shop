import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../Theme";

const HotCategory = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div className="w-full">
        <div className="max-w-[1200px] md:mt-6 mx-auto px-4">
          <h1 className="text-2xl font-bold pb-4 md:text-4xl">
            Hot Categories
          </h1>
          <div className="grid gap-2   grid-cols lg:grid-cols-8 lg:grid-rows-2  ">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="men"
              className=" shadow-sm lg:col-span-5 lg:row-span-2 hover:translate-y-1 hover:ease-in-out duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="h-[300px] w-full object-cover rounded-xl"
              />
              <p
                to="men"
                className={`mt-6 text-[18px] font-bold ${
                  isDarkMode ? "text-[#808080]" : ""
                }`}
              >
                Men Shoes
              </p>
            </Link>

            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="women"
              className="shadow-sm gap-2 lg:col-span-3 lg:row-span-1 hover:translate-y-1 hover:ease-in-out duration-500"
            >
              <img
                src="https://imgs.search.brave.com/mEN4sW0W9qaCj1Ww0orOEgP0XUdlUTZrypTqcm6NUCY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mb290/d2Vhcm5ld3MuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA5L1VudGl0bGVk/LTIwMjEtMDUtMTRU/MTUyNzU0LjM4OC5q/cGc"
                alt=""
                className="h-[150px] w-full  object-center object-cover rounded-xl"
              />
              <p
                className={`mt-6 text-[18px] font-bold ${
                  isDarkMode ? "text-[#808080]" : ""
                }`}
              >
                Women Shoes
              </p>
            </Link>

            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="kids"
              className="shadow-sm gap-2 lg:col-span-3 lg:row-span-1 hover:translate-y-1 hover:ease-in-out duration-500"
            >
              <img
                src="https://imgs.search.brave.com/WwNENL9oU4PxRekasXkZsMyE66GhMJxGj6dmdlV9xHg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYWRpZGFzLmNv/bS9pbWFnZXMvd18z/ODMsaF8zODMsZl9h/dXRvLHFfYXV0byxm/bF9sb3NzeSxjX2Zp/bGwsZ19hdXRvL2Q3/NWNkZGJjZTU4MzQx/YjNhNmI2NTY2M2U3/ODQ5ODAyXzkzNjYv/bGl0ZS1yYWNlci1h/ZGFwdC02LjAtc2hv/ZXMta2lkcy5qcGc"
                alt=""
                className="h-[160px] w-full  object-bottom object-cover rounded-xl"
              />
              <p
                className={`mt-6 text-[18px] font-bold ${
                  isDarkMode ? "text-[#808080]" : ""
                }`}
              >
                Kids Shoes
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotCategory;
