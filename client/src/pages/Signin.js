import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const showToastAlert = (err) => {
    toast.error(`Error: ${err}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/register", {
        firstName: userData.firstName,
        secondName: userData.secondName,
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("User Registered Successfully", {
          onClose: () => navigate("/"), // Navigate to the homepage after the toast is closed
        });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        // alert(err.response.data)
        showToastAlert(err.response.data);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-row  gap-10 justify-center px-6 py-12 md:mt-16 lg:px-8">
        <div className="">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Sign Up
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-5"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="firstName"
                    placeholder="First Name"
                    autoComplete="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange}
                    className="block w-full md:w-[400px] border-b bg-inherit px-3 py-1.5  shadow-sm placeholder:text-gray-400 placeholder:text-xs md:placeholder:text-sm outline-none  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="mt-1">
                  <input
                    id="secondName"
                    name="secondName"
                    type="secondName"
                    placeholder="Second Name"
                    autoComplete="secondName"
                    value={userData.secondName}
                    onChange={handleInputChange}
                    className="block  w-full md:w-[400px] border-b bg-inherit px-3 py-1.5  shadow-sm placeholder:text-gray-400 placeholder:text-xs md:placeholder:text-sm outline-none  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="block  w-full md:w-[400px] border-b bg-inherit px-3 py-1.5  shadow-sm placeholder:text-gray-400 placeholder:text-xs md:placeholder:text-sm outline-none  sm:text-sm sm:lea"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between"></div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    autoComplete="current-password"
                    value={userData.password}
                    onChange={handleInputChange}
                    className="block  w-full md:w-[400px] border-b px-3 py-1.5 shadow-sm placeholder:text-gray-400 placeholder:text-xs md:placeholder:text-sm bg-inherit outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full md:w-[400px] justify-center rounded-md bg-blue-600 px-3 py-2 md:py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign in
                </button>
              </div>
              <div className="text-sm">
                <Link
                  href="#forgot"
                  className="font-semibold text-blue-600 hover:text-blue-500"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:flex items-baseline">
          <img
            className="h-[400px]  object-cover object-center"
            src="https://img.freepik.com/free-vector/ecommerce-campaign-concept-illustration_114360-8432.jpg?w=740&t=st=1692911039~exp=1692911639~hmac=0ae6b5968e625bcc4e502780954be43e3e21fa12354c853b6603b75e17b556ea"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Signin;
