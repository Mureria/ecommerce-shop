import React from 'react'
import {CgProfile} from 'react-icons/cg'


const Signin = () => {
  return (
    <>
<div className="flex min-h-full flex-col justify-center px-6 py-12 mb-10 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <CgProfile size={50} className="mx-auto " />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">First Name *</label>
        <div className="mt-1">
          <input id="firstName" name="firstName" type="firstName" autocomplete="firstName" required class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="secondName" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">Second Name *</label>
        <div className="mt-1">
          <input id="secondName" name="secondName" type="secondName" autocomplete="secondName" required class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">Tel. No. *</label>
        <div className="mt-1">
          <input id="phone" name="phone" type="phone" autocomplete="phone" required class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">Email address</label>
        <div className="mt-1">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
        </div>
      </div>
      

      <div>
        <div className="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">Password *</label>
        </div>
        <div className="mt-1">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">Confrim Password *</label>
        </div>
        <div className="mt-1">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:text-xl">Sign In</button>
      </div>
      <div class="text-sm md:text-base">
        <a href="#val" class="font-semibold text-indigo-600 hover:text-indigo-500">Login</a>
      </div>
    </form>
  </div>
</div>
    </>
    )
}

export default Signin