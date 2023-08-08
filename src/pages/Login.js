import React from 'react'
import {CgProfile} from 'react-icons/cg'

const Login = () => {
  return (
   <>
    <div className="flex h-screen flex-col justify-center px-2 py-0 lg:px-0">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <CgProfile size={50} className="mx-auto" />
        <h2 className="mt-8 text-center text-2xl md:text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm md:text-base font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" required class="block w-full md:text-xl  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" class="block text-sm md:text-base font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div className="mt-1">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full  md:text-xl  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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