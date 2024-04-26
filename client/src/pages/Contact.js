import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='w-full h-full'>
        <div className='max-w-[1200px] mx-auto my-2 mb-4 px-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-inherit py-2 '>
              <h1 className='text-2xl font-bold py-4 md:text-4xl'>Contact Us</h1>
              <p className='text-[#606060] md:text-sm  py-2'>If you have any questions or inquiries, please don't hesitate to reach out to us.</p>
              <form action="" className='my-6 space-y-6'>
                <div className=' grid grid-cols-2 gap-4 w-full'>
                  <div>
                    <div className="">
                      <input id="firstName" name="firstName" placeholder='First Name' type="firstName" autocomplete="firstName" required className="block w-full border-b outline-none  px-3  shadow-sm placeholder:text-[#707070] md:text-sm py-2 sm:text-sm sm:leading-6 bg-inherit"/>
                    </div>
                  </div>   
                  <div>
                    <div className="">
                      <input id="secondName" name="secondName" type="secondName" autocomplete="secondName" required placeholder='Second Name' className="block w-full border-b py-2 px-3  shadow-sm  placeholder:text-[#707070]  outline-none  md:text-sm bg-inherit sm:text-sm sm:leading-6"/>
                    </div>
                  </div>   
                </div>
                <div>
                    <div className="">
                      <input id="email" name="email" type="email" autocomplete="email" required placeholder='Email' className="block w-full border-b outline-none py-2 px-3  shadow-sm  placeholder:text-[#707070]   md:text-sm bg-inherit sm:text-sm sm:leading-6"/>
                    </div>
                  </div>  
                <div>
                    <div className="">
                      <input id="phone" name="phone" type="phone" autocomplete="phone" required placeholder='Phone' className="block w-full border-b py-2 px-3  shadow-sm  outline-none placeholder:text-[#707070]   md:text-sm bg-inherit sm:text-sm sm:leading-6"/>
                    </div>
                  </div>  
                  <div className="sm:col-span-2">
                    <div className="">
                      <textarea name="message" id="message" placeholder='Message' rows={2} className="block w-full placeholder:text-[#707070]  px-3.5 pt-5 text-gray-00 shadow-sm  ring-inset ring-gray-300 placeholder: bg-inherit outline-none border-b  sm:text-sm sm:leading-6" defaultValue={''}/>
                    </div>
                  </div>  
                  <div className="mt-4">
                    <button type="submit" className="block w-full  bg-indigo-600 px-3.5 py-2 md:py-3 text-center text-base md:text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                      Let's talk
                    </button>
                  </div>  
                </form>
            </div>
            <div className='hidden md:block relative py-9'>
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



