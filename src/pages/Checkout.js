import React from 'react'


const Checkout = () => {
  return (
    <>
      <div className='w-full h-full'>
      <div className='max-w-[1200px] mx-auto my-10 mb-40 px-4 '>
          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <h1 className='text-xl font-bold md:text-3xl p-4'>Address Information</h1>
              <div className='border-b border-gray-300'>
              <form action="" className='my-8 md:my-20'>
                <div className=' grid grid-cols-2 gap-4 w-full'>
                  <div>
                    <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">First Name *</label>
                    <div className="mt-2">
                      <input id="firstName" name="firstName" type="firstName" autocomplete="firstName" required class="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
                    </div>
                  </div>   
                  <div>
                    <label for="secondName" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">Second Name</label>
                    <div className="mt-2">
                      <input id="secondName" name="secondName" type="secondName" autocomplete="secondName" required class="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
                    </div>
                  </div>   
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900 mt-4 md:text-base">Email </label>
                    <div className="mt-2">
                      <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
                    </div>
                  </div>  
                <div>
                    <label for="phone" class="block text-sm font-medium leading-6 text-gray-900 mt-4 md:text-base">Phone</label>
                    <div className="mt-2">
                      <input id="phone" name="phone" type="phone" autocomplete="phone" required class="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl sm:text-sm sm:leading-6"/>
                    </div>
                  </div>  
                  <div className="mt-10">
                    <button type="submit" className="block w-full  bg-indigo-600 px-3.5 py-2 md:py-5 text-center text-sm md:text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                      Submit
                    </button>
                  </div>  
                </form>
              
              </div>
              <div className='border-b border-gray-300 pb-9'>
                <h1 className='text-base md:text-xl font-bold my-5'>Payment Method</h1>
                <div className='flex flex-row flex-wrap justify-between text-sm md:text-3xl'>
                 
                  <form action="">
                    <div className='flex justify-center items-center gap-6'>
                      <div className='flex justify-center items-center gap-2'>
                      <div>
                        <input id="mpesa" name="checkbox" type="checkbox"/>
                      </div>
                      <div>
                      <label for="mpesa" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">Mpesa</label>
                      </div>
                    </div> 
                    <div className='flex justify-center items-center gap-2'>
                      <div>
                        <input id="mpesa" name="checkbox" type="checkbox"/>
                      </div>
                      <div>
                      <label for="mpesa" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">Visa</label>
                      </div>
                    </div> 
                    <div className='flex justify-center items-center gap-2'>
                      <div>
                        <input id="mpesa" name="checkbox" type="checkbox"/>
                      </div>
                      <div>
                      <label for="mpesa" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">Master</label>
                      </div>
                    </div> 
                    <div className='flex justify-center items-center gap-2'>
                      <div>
                        <input id="mpesa" name="checkbox" type="checkbox"/>
                      </div>
                      <div>
                      <label for="mpesa" class="block text-sm font-medium leading-6 text-gray-900 md:text-base">Airtel Money</label>
                      </div>
                    </div> 
                    </div>
                  </form>
                </div>
              </div>
              <div className='flex justify-between mt-4'>
                <div>
                  <h1 className='font-bold text-base md:text-xl mb-4'>Delivery Address</h1>
                </div>
                <div>
                  <button className='border border-orange-400 rounded-md px-2 text-sm hover:bg-orange-500'>Add New Address</button>
                </div>
              </div>
              <div className='md:flex gap-2 py-4  '>
                <h1 className='text-sm md:text-base'>Ireri</h1>
                <h1 className='text-sm md:text-base'>0797516617</h1>
                <h1 className='text-sm md:text-base'>Kiambu,Kinoo,Kinoo Electricals and Electronics World KiliShop,KINOO,Mama Ngina Stage, Electricals and Electronics World at Marimo Construction</h1>
              </div>
            </div>

            <div className='bg-gray-100 rounded-lg p-4'>
              <h1 className='text-xl font-bold md:text-3xl mb-8 md:mb-16'>Order Summary</h1>
              <div className='grid grid-cols-4 border-b border-gray-300 pb-4'>
                <div>
                  <h1 className='font-bold text-sm md:text-lg font-semibold'>Item</h1>
                </div>
                <div>
                  <h1 className='text-sm md:text-lg font-semibold'>Unit Price</h1>
                </div>
                <div>
                  <h1 className='text-sm md:text-lg font-semibold'>Quantity</h1>
                </div>
                <div>
                  <h1 className='text-sm md:text-lg font-semibold'>Amount</h1>
                </div>
              </div>
              <div className='grid grid-cols-4 gap-4 py-4'>
                <div>
                  <img src="https://image.kilimall.com/kenya/shop/store/goods/7731/2022/12/16698998912829ab97ed8252047669b2a025616820c26_240.jpg.webp" alt="" />
                </div>
                <div className='flex justify-center items-center'>
                  <h1 className='text-sm md:text-base'>KSh 23,699</h1>
                </div>
                <div className='flex justify-center items-center'>
                  <h1 className='text-sm md:text-base'>1</h1>
                </div>
                <div className='flex justify-center items-center'>
                  <h1 className='font-bold text-orange-400 text-sm md:text-base'>KSh 23,699</h1>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-3 border-t border-gray-300 pt-8 mt-4'>
               <h1 className='text-sm md:text-lg'>Goods Amount</h1>
               <h1 className='text-sm md:text-lg'>Ksh 23,699</h1>
               <h1 className='text-sm md:text-lg'>Shipping Fee</h1>
               <h1 className='text-sm md:text-lg'>+ Ksh 219</h1>
               <h1 className='text-sm font-bold text-orange-400 mt-4 md:text-xl'>Pay Amount</h1>
               <h1 className='text-sm font-bold text-orange-400 mt-4 md:text-xl'>Ksh 23,918</h1>
              </div>
              <div className='mt-20 text-base md:text-lg'>
                <button className='px-6 py-4 bg-orange-500 text-white w-full font-bold '>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Checkout