import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { CiDark, CiLight } from "react-icons/ci";
import Marquee from "react-fast-marquee";
import { useTheme } from "../Theme";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const [nav, setNav] = useState(false);

  const logged = true;

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className={`hidden md:block w-full  p-3 bg-black`}>
        <div className="flex items-center justify-between max-w-[1200px] pb-1 mx-auto border-b border-gray-900 text-gray-400">
          <Marquee>
            <h1 className="text-xl mr-[10rem] ">
              Enjoy Our Amazing SOLEFUL Discounts
            </h1>
            <a href="0797516617">Call or whatsapp: 0797516617</a>
          </Marquee>
        </div>
      </div>
      <div className="w-full  bg-black">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto border-b border-gray-900">
          <div>
            <Link to="/">
              <h1 className="text-xl px-4 md:px-0 font-bold md:text-2xl my-4 text-gray-300">
                Chosen Soles
              </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-6 text-gray-400">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/men" className="hover:underline">
                Men
              </Link>
              <Link to="/women" className="hover:underline">
                Women
              </Link>
              <Link to="/kids" className="hover:underline">
                Kids
              </Link>
              <Link to="about" className="hover:underline">
                About
              </Link>
              <Link to="contact" className="hover:underline">
                Contact
              </Link>
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div>
              <button onClick={toggleTheme}>
                {isDarkMode ? (
                  <div className="relative group">
                    <CiDark className=" font-bold text-2xl text-gray-400" />
                    <p className="hidden absolute bottom-[-20px] text-black text-xs py-0 px-1 rounded-sm bg-slate-200 group-hover:block">
                      Dark
                    </p>
                  </div>
                ) : (
                  <div className="relative group">
                    <CiLight className=" font-bold text-2xl text-gray-400" />
                    <p className="hidden absolute bottom-[-20px] text-black text-xs py-0 px-1 rounded-sm bg-slate-200 group-hover:block">
                      Light
                    </p>
                  </div>
                )}
              </button>
            </div>
            <div>
              <Link to="cart" className="relative group">
                <AiOutlineShoppingCart className="text-gray-400" size={24} />
                <p className="hidden group-hover:block absolute bottom-[-20px] text-black text-xs py-0 px-1 rounded-sm bg-slate-200">
                  Cart
                </p>
              </Link>
            </div>
            <div>
              {logged ? (
                <div className="relative group">
                  <img
                  src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/383783882_2385446108304304_1440592635612658205_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGe1sTzEObNB1Agj5omFxdljDr5cfJR-KmMOvlx8lH4qQ2h3_98-7VJ2a8GGKtKmygpmJobtsyCCtEGKW6MuRRq&_nc_ohc=fZptVbqyeHMQ7kNvgFofCBr&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfDEDva3Kn3-0DAJqR1nA8iIR9MXpzsl07D51bhqEMyfmQ&oe=662FEE19"
                    alt=""
                    className="rounded-full object-cover  w-8 h-8 group-hover:opacity-75"
                  />
                  <p className="hidden absolute bottom-[-20px] text-black text-xs py-0 px-1 rounded-sm bg-slate-200 group-hover:block">
                    Account
                  </p>
                </div>
              ) : (
                <div className="relative group">
                  <Link to="register">
                    <button className="bg-[#18181B] px-3 py-2 rounded-md text-sm">
                      Sign in
                    </button>
                  </Link>
                  <p className="hidden absolute bottom-[-20px] text-black text-xs py-0 px-1 rounded-sm bg-slate-200 group-hover:block">
                    Register
                  </p>
                </div>
              )}
            </div>
          </div>

          {/*Mobile  */}
          <div className={` md:hidden px-4 text-white`}>
            {nav ? (
              <AiOutlineClose size={22} onClick={handleNav} />
            ) : (
              <BiMenu size={26} onClick={handleNav} className="" />
            )}
          </div>
        </div>
      </div>
      {nav ? (
        <ul className="md:hidden h-screen fixed  mt-4 bg-inherit flex flex-col text-center max-w-[100%] text-xl font-medium  w-full transform top-10 overflow-auto ease-in-out transition-all duration-500 z-20 ">
          <Link
            to="/"
            className="border-b border-gray-800 py-4 max-w-[300px] mx-auto"
            onClick={handleNav}
          >
            Home
          </Link>
          <Link
            to="about"
            className="border-b border-gray-800 py-4 max-w-[300px] mx-auto"
            onClick={handleNav}
          >
            About
          </Link>
          <Link
            to="contact"
            className="border-b border-gray-800 py-4 max-w-[300px] mx-auto"
            onClick={handleNav}
          >
            Contact
          </Link>
          <Link
            to="login"
            className="border-b border-gray-800 py-4 max-w-[300px] mx-auto"
            onClick={handleNav}
          >
            Login
          </Link>
          <Link
            to="register"
            className="border-b border-gray-800 py-4 max-w-[300px] mx-auto"
            onClick={handleNav}
          >
            Register
          </Link>
          <Link to="checkout" className="py-4 " onClick={handleNav}>
            Cart
          </Link>
          <div>
            <button onClick={toggleTheme}>
              {isDarkMode ? (
                <CiDark className="font-bold text-2xl" />
              ) : (
                <CiLight className="font-bold text-2xl" />
              )}
            </button>
          </div>
        </ul>
      ) : (
        <ul className="md:hidden index-1000  absolute -top-[100%] bg-black text-white  flex text-2xl text-center flex-col w-full">
          <Link to="/" className="border-b border-gray-800 py-4">
            Home
          </Link>
          <Link to="about" className="border-b border-gray-800 py-4">
            About
          </Link>
          <Link to="contact" className="border-b border-gray-800 py-4">
            Contact
          </Link>
          <Link to="login" className="border-b border-gray-800 py-4">
            Login
          </Link>
          <Link to="register" className="border-b border-gray-800 py-4">
            Register
          </Link>
          <Link to="checkout" className="py-4">
            Cart
          </Link>
        </ul>
      )}
    </>
  );
};

export default Header;
