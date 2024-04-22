import React, { useState } from 'react';
import {CgProfile} from 'react-icons/cg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Signin = () => {
  const navigate = useNavigate();


  const [userData, setUserData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
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
    axios.post('http://localhost:5000/auth/register', {
        firstName:userData.firstName,
        secondName:userData.secondName,
        email:userData.email,
        password:userData.password,
    }
    )
    .then((response) => {
        console.log(response.data)
        toast.success('User Registered Successfully', {
          onClose: () => navigate('/'), // Navigate to the homepage after the toast is closed
        });
    } 
    )
    .catch((err) => {
        console.log(err);
        console.log(err.response);
        // alert(err.response.data)
        showToastAlert(err.response.data)
    })
}

  return (
    <>
<div className="flex min-h-screen flex-col justify-center px-6 py-10 mb-10 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <CgProfile size={50} className="mx-auto " />
    <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight">Sign In</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="" method="POST" onSubmit={handleSubmit}>
      <div>
        <label for="firstName" className="block text-sm font-medium leading-6 ">First Name *</label>
        <div className="mt-1">
          <input id="firstName" name="firstName" type="text" placeholder='First Name' autoComplete="firstName" value={userData.firstName} onChange={handleInputChange} className="block w-full rounded-md py-1.5 px-3 border  shadow-sm  placeholder:text-gray-400 outline-none bg-inherit sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="secondName" className="block text-sm font-medium leading-6 ">Second Name *</label>
        <div className="mt-1">
          <input id="secondName" name="secondName" type="text" placeholder='Second Name' autoComplete="secondName" value={userData.secondName}  onChange={handleInputChange} className="block w-full rounded-md border py-1.5 px-3  shadow-sm placeholder:text-gray-400 bg-inherit outline-none  sm:text-sm sm:leading-6"/>
        </div>
      </div>
      

      <div>
        <label for="email" className="block text-sm font-medium leading-6">Email address *</label>
        <div className="mt-1">
          <input id="email" name="email" type="email" placeholder='Email' autoComplete="email"  value={userData.email} onChange={handleInputChange} className="block w-full rounded-md border py-1.5 px-3  shadow-sm outline-none placeholder:text-gray-400 bg-inherit   sm:text-sm sm:leading-6"/>
        </div>
      </div>
      

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 ">Password *</label>
        </div>
        <div className="mt-1">
          <input id="password" name="password" type="password" placeholder='Password' autoComplete="current-password"  value={userData.password} onChange={handleInputChange} className="block border outline-none w-full rounded-md  py-1.5 px-3  shadow-sm  bg-inherit placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
    

      <div>
        <button type="submit"  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:text-base">Sign In</button>
      </div>
      <div className="text-sm md:text-base">
        
        <Link to='/login' className="font-semibold text-indigo-600 hover:text-indigo-500">Login</Link>
      </div>
    </form>
  </div>
</div>
    </>
    )
}

export default Signin