import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='w-full h-full'>
        <div className='max-w-[1200px] mx-auto my-2 mb-4 px-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-gray-100 py-2 px-8'>
              <h1 className='text-xl text-center md:text-xl font-bold'>Contact Us</h1>
              <p className='text-sm md:text-sm text-center py-2'>If you have any questions or inquiries, please don't hesitate to reach out to us.</p>
              <form action="" className='my-6'>
                <div className=' grid grid-cols-2 gap-4 w-full'>
                  <div>
                    <label for="firstName" class=" mt-2 block  font-medium leading-6 text-gray-900 text-sm">First Name *</label>
                    <div className="">
                      <input id="firstName" name="firstName" type="firstName" autocomplete="firstName" required class="block w-full rounded-md border-0 py-1 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
                    </div>
                  </div>   
                  <div>
                    <label for="secondName" class=" mt-2 block font-medium leading-6 text-gray-900 text-sm">Second Name</label>
                    <div className="">
                      <input id="secondName" name="secondName" type="secondName" autocomplete="secondName" required class="block w-full rounded-md border-0 py-1 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
                    </div>
                  </div>   
                </div>
                <div>
                    <label for="email" class="mt-2 block  font-medium leading-6 text-gray-900 text-sm">Email * </label>
                    <div className="">
                      <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
                    </div>
                  </div>  
                <div>
                    <label for="phone" class=" block  font-medium leading-6 mt-2 text-gray-900 text-sm">Phone *</label>
                    <div className="">
                      <input id="phone" name="phone" type="phone" autocomplete="phone" required class="block w-full rounded-md border-0 py-1 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
                    </div>
                  </div>  
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 mt-2 text-gray-900">
                      Message
                    </label>
                    <div className="">
                      <textarea name="message" id="message" rows={2} className="block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={''}/>
                    </div>
                  </div>  
                  <div className="mt-4">
                    <button type="submit" className="block w-full  bg-indigo-600 px-3.5 py-2 md:py-3 text-center text-base md:text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                      Let's talk
                    </button>
                  </div>  
                </form>
            </div>
            <div className='hidden md:block relative'>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/30'></div>
              <img className='object-cover h-full w-full rounded-md' src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="ava" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact