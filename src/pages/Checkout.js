import React from 'react'
import { RiDeleteBin6Line} from 'react-icons/ri'
import shoe from '../assets/Air_jordan_logo_PNG1.png'

const Checkout = () => {
  return (
    <>
        <div className='w-full h-full '>
            <div className='max-w-[1400px] my-0 mx-auto '>
                <div className='grid md:grid-cols-2 gap-2 md:gap-10  px-4'>
                    <div className='mt-5 md:mt-20 mb-10 text-2xl font-medium bg-gray-100 p-6'>
                        <div className='border-b pb-10'>
                            <h1 className='pb-10'>Contact information</h1>
                            <form action="">
                                <div>
                                    <label for="email" class="block text-sm md:text-xl font-medium leading-6 text-gray-900">Email address</label>
                                    <div className="mt-2">
                                        <input id="email" name="email" type="email" autocomplete="email" required class="block w-full md:text-xl  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div className='border-b pb-10 border-gray-300 my-10'>
                            <h1>Shipping Information</h1>
                            <form action="">
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label for="firstName" className=" text-sm md:text-xl font-medium leading-6 text-gray-900">First Name</label>
                                        <div className="mt-2 ">
                                            <input id="firstName" name="firstName" type="firstName" autocomplete="firstName" required className="md:text-xl w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="secondtName" className=" text-sm md:text-xl font-medium leading-6 text-gray-900">Second Name</label>
                                        <div className="mt-2 ">
                                            <input id="secondtName" name="secondtName" type="secondtName" autocomplete="secondtName" required class="md:text-xl w-full  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <form action="">
                                <div>
                                    <label for="email" class="block text-sm md:text-xl font-medium leading-6 text-gray-900">Email address</label>
                                    <div className="mt-2">
                                        <input id="email" name="email" type="email" autocomplete="email" required class="block w-full md:text-xl  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                            </form>
                            <form action="">
                                <div>
                                    <label for="phone" class="block text-sm md:text-xl font-medium leading-6 text-gray-900">Phone</label>
                                    <div className="mt-2">
                                        <input id="phone" name="phone" type="phone" autocomplete="phone" required class="block w-full md:text-xl  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                            </form>
                            <form action="">
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label for="city" className=" text-sm md:text-xl font-medium leading-6 text-gray-900">City</label>
                                        <div className="mt-2 ">
                                            <input id="city" name="city" type="city" autocomplete="city" required className="md:text-xl w-full  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="country" className=" text-sm md:text-xl font-medium leading-6 text-gray-900">Country</label>
                                        <div className="mt-2 ">
                                            <input id="country" name="country" type="country" autocomplete="country" required class="md:text-xl w-full  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className=''>
                            <h1>Payment</h1>
                            <div className='flex justify-between items-center'>
                            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className="relative  -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="checkboxDefault"
                                    checked />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    for="checkboxDefault">
                                    Mpesa
                                </label>
                            </div>
                            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className="relative  -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="checkboxDefault" />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    for="checkboxDefault">
                                    Airtel Money
                                </label>
                            </div>
                            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className="relative -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="checkboxDefault" />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    for="checkboxDefault">
                                    Credit card
                                </label>
                            </div>
                            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className="relative -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDisabled"
                                    disabled />
                                <label
                                    className="inline-block pl-[0.15rem] opacity-50 hover:pointer-events-none"
                                    for="flexCheckDisabled">
                                    Paypal
                                </label>
                            </div>
                            </div>
                                     <div>
                                        <label for="cardNumber" className=" text-sm md:text-xl font-medium leading-6 text-gray-900">Card Number</label>
                                        <div className="mt-2 ">
                                            <input id="cardNumber" name="cardNumber" type="cardNumber" autocomplete="cardNumber" required className="md:text-xl w-full  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                                     <div>
                                        <label for="city" className=" text-sm md:text-xl font-medium leading-6 text-gray-900">Name on Card</label>
                                        <div className="mt-2 ">
                                            <input id="city" name="city" type="city" autocomplete="city" required className="md:text-xl w-full  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                                     <div>
                                        <label for="expiry" className=" text-sm md:text-xl font-medium leading-6 text-gray-900">Expiration date (MM/YYYY)</label>
                                        <div className="mt-2 ">
                                            <input id="expiry" name="expiry" type="expiry" autocomplete="expiry" required className="md:text-xl w-full  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                                     <div>
                                        <label for="cvc" className=" text-sm md:text-xl font-medium leading-6 text-gray-900">CVC</label>
                                        <div className="mt-2 ">
                                            <input id="cvc" name="cvc" type="cvc" autocomplete="cvc" required className="md:text-xl w-full  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                        </div>
                    </div>
                    <div className='mt-1 md:mt-20 mb-10 text-2xl p-6 font-medium rounded-md'>
                        <h1 className='pb-10'>Order Summary</h1>
                        <div className='border border-gray-200'>
                            <div className='grid grid-cols-2 gap-4 p-8 bg-white rounded-md'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className=''><img src={shoe} alt="" /></div>
                                    <div className=''>
                                        <h1>Air Jordan 4</h1>
                                        <h1>Black</h1>
                                        <h1>42</h1>
                                        <p>Kshs. 2800</p>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <RiDeleteBin6Line/>
                                </div>
                            </div>
                        </div>
            
                        <div className='border border-gray-200'>
                            <div className='grid grid-cols-2 gap-4 p-8 bg-white rounded-md'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className=''><img src={shoe} alt="" /></div>
                                    <div className=''>
                                        <h1>Air Jordan 4</h1>
                                        <h1>Black</h1>
                                        <h1>42</h1>
                                        <p>Kshs. 2800</p>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <RiDeleteBin6Line/>
                                </div>
                            </div>
                        </div>
                        <div className='border border-gray-200'>
                            <div className='grid grid-cols-2 gap-4 p-8 bg-white rounded-md'>
                                    <div className=''>
                                        <h1>Subtotal</h1>
                                        <h1>Delivery</h1>
                                        <h1>Tax</h1>
                                    </div>
                                <div className='flex justify-end'>
                                <div className=''>
                                        <h1>Kshs. 2800</h1>
                                        <h1>Kshs. 300</h1>
                                        <h1>Kshs. 3100</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border border-gray-200'>
                            <div className='grid grid-cols-2 gap-4 p-8 bg-white rounded-md'>
                                    <div className=''>
                                        <h1>Subtotal</h1>
                                    </div>
                                <div className='flex justify-end'>
                                <div className=''>
                                        <h1>Kshs. 3100</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border border-gray-200 '>
                           <button className='w-full p-4 bg-blue-600 p-4 mt-4 rounded-md hover:bg-blue-500 text-white '>Confirm order</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}

export default Checkout