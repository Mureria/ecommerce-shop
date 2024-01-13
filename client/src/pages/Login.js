import React, { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {CgProfile} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }


  const showToastAlert = (err) => {
    toast.error(`Error: ${err}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/auth/login', {
        email:email,
        password:password,
    }
    )
    .then((response) => {
        console.log(response.data)
        toast.success('User Logged in Successfully', {
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
    <div className="flex my-20 md:my-16 flex-col justify-center px-2 lg:px-0">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <CgProfile size={50} className="mx-auto" />
        <h2 className="mt-6 text-center text-2xl md:text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <div>
            <label for="email" class="block text-sm  font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-1">
              <input id="email" name="email" type="email" autocomplete="email"  value={email} onChange={handleEmail} class="block w-full text-sm md:text-base  rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" class="block text-sm  font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div className="mt-1">
          <input id="password" name="password" type="password" autocomplete="current-password" value={password} onChange={handlePassword}  class="block w-full  md:text-base  rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm md:text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
      </div>
        <div class="text-sm">
          <a href="#val" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
        </div>
      </form>
    </div>
  </div>
   </>
  )
}

export default Login