import React from 'react'
import {  FaStar } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";





const Product = () => {
  return (
    <>
        <div className='w-full h- my-0'>
            <div className='max-w-[1200px] mx-auto my-2 mb-4 px-4 py-4  bg-slate-200'>
                <div className='flex gap-4 flex-col md:flex-row p-4 justify-between items-start'>
                    <div className=''>
                        <img src='https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className=' w-[500px] h-[300px] md:h-[500px]  object-cover'/>
                    </div>

                    <div className='flex flex-col flex-1'>
                        <h1 className='text-2xl text-[#333333]'>original nike airforce 1 shoes white White 36</h1>
                        <p className='text-x text-orange-400 inline-block'>****</p>
                        <p className='text-xl text-blue-500'>41 customer reviews</p>

                        <div className='flex flex-1 gap-2 p-2 bg-slate-300 items-baseline'>
                            <p className='text-2xl text-orange-600'>KSh 2,650</p>
                            <p className='text-sm text-[#909399 line-through'>KSh 3,900</p>
                            <p className='text-xs bg-orange-400 px-3  py-1 rounded-md'>32% OFF</p>
                        </div>

                        <div className='grid grid-cols-3 mt-4 gap-7 items-center'>

                            <div className='text-sm text-[#333333] '>
                                <p>Shipping From:</p>
                            </div>
                            <div  className='col-span-2'>
                                <p>Local Dispatch</p>
                            </div>
                            <div>
                                <p>Color:</p>
                            </div>
                            <div className='col-span-2 border border-orange-600 w-20 py-0 px-2 text-center'>
                                <p >White</p>
                            </div>
                            <div>
                                <p>Size:</p>
                            </div>
                            <div className='flex items-baseline gap-2 col-span-2 flex-wrap'>
                                <p className='border border-orange-600  py-0 px-2 text-center'>36</p>
                                <p className='border  py-0 px-2 text-center'>37</p>
                                <p className='border  py-0 px-2 text-center'>38</p>
                                <p className='border  py-0 px-2 text-center'>39</p>
                                <p className='border  py-0 px-2 text-center'>40</p>
                                <p className='border  py-0 px-2 text-center'>41</p>
                                <p className='border  py-0 px-2 text-center'>42</p>
                                <p className='border  py-0 px-2 text-center'>44</p>
                                <p className='border  py-0 px-2 text-center'>45</p>
                            </div>
                            <div>
                                <p>Qty:</p>
                            </div>
                            <div className='flex items-center'>
                               <div className='border bg-slate-300 py-1 px-1'><GoPlus/></div>
                               <div className=' border-slate-300 border-y py-0 px-7 text-[#333333]'>22</div>
                               <div className='border  bg-slate-300 py-1 px-1  '><FiMinus /></div>
                            </div>
                        </div>

                        <div className=' md:inline-flex mt-4 pb-6 border-b border-black/10'>
                                <button className='w-full md:w-6/12 border mb-4 md:mb-0 border-orange-400 px-14 py-4 mr-4'>Add to Cart</button>
                                <button className=' w-full md:w-6/12 border bg-orange-400 px-14 py-4'>Buy Now</button>
                            </div>

                            <div className='mt-4 flex gap-4'>
                                <p>Payment:</p>
                                <p>Mpesa, Airtel, lipapay, kcb</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Description */}
        <div className='w-full h- my-0  '>
            <div className='max-w-[1200px] mx-auto my-2 mb-4 px-4 py-4 '>
                <div className='text-lg  inline-flex gap-4 items-center'>
                    <a href='#Description'><p className='px-6 py-3 bg-orange-500'>Description</p></a>
                    <a href='#Reviews'><p>Reviews</p></a>
                </div>
                <div className='border-b'/>

                <div className=''>
                    <h1 id='Description' className='font-bold text-lg py-6'>Description</h1>
                    <img src='' alt=''/>
                    <p>The Nike Air Force 1 has experienced a resurgence in popularity, as fashion moves in waves. Occasionally, the sneaker takes a backseat to other “shoes of the moment”, but always resurfaces. Regardless if the AF1 is currently an “it” sneaker, it still sells the most and always remains a popular choice.</p>
                </div>

                <div className='bg-slate-100 mt-4 p-2 rounded'>
                    <h1 id='Reviews' className='font-bold text-lg pb-6'>Customer Reviews</h1>
                    <div className='flex flex-col md:flex-row items-center bg-white px-4 py-2 gap-5 md:gap-20'>
                        <div className=' px-20 py-8 border border-r'>
                            <p className='text-5xl text-orange-400 mb-3'>4.5<span className='text-black/50 text-5xl'>/5</span></p>
                            <p className='tracking-widest flex justify-center md:justify-start text-orange-500'><FaStar /><FaStar /> <FaStar /><FaStar /><FaStar /></p>
                        </div>

                        <div>
                            <div className='flex gap-4 items-center'>
                                <div className='flex gap-2 items-center flex-1'>
                                    <div className='text-xl font-medium'>5</div>
                                    <div className=' text-orange-500'><FaStar /></div>
                                    <div className='text-lg font-normal font-mono text-[#75757a]'>234</div>
                                </div>
                                <div>-------</div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='flex gap-2 items-center flex-1'>
                                    <div className='text-xl font-medium'>5</div>
                                    <div className=' text-orange-500'><FaStar /></div>
                                    <div className='text-lg font-normal font-mono text-[#75757a]'>234</div>
                                </div>
                                <div>----------</div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='flex gap-2 items-center flex-1'>
                                    <div className='text-xl font-medium'>5</div>
                                    <div className=' text-orange-500'><FaStar /></div>
                                    <div className='text-lg font-normal font-mono text-[#75757a]'>234</div>
                                </div>
                                <div>----------</div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='flex gap-2 items-center flex-1'>
                                    <div className='text-xl font-medium'>5</div>
                                    <div className=' text-orange-500'><FaStar /></div>
                                    <div className='text-lg font-normal font-mono text-[#75757a]'>234</div>
                                </div>
                                <div>----------</div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='flex gap-2 items-center flex-1'>
                                    <div className='text-xl font-medium'>5</div>
                                    <div className=' text-orange-500'><FaStar /></div>
                                    <div className='text-lg font-normal font-mono text-[#75757a]'>234</div>
                                </div>
                                <div>----------</div>
                            </div>
                           
                        
                            
                            
                        </div>
                        
                    </div>

                    <div className=' bg-white mt-4 px-6 md:px-14 py-2 text-lg'>
                        <div className=' border-b py-4 '>
                            <p className='md:text-xl text-base'>Mk23456</p>
                            <p className='flex py-1 text-orange-400'><FaStar/><FaStar /><FaStar /><FaStar /></p>
                            <p className='py-2 text-base text-slate-700'>good stuff ,I love it ... delivery was fast and super easy . am happy</p>
                            <p className='text-sm text-slate-400'>263/03/2023</p>
                        </div>
                        <div className=' border-b py-4 '>
                            <p className='md:text-xl text-base'>User22</p>
                            <p className='flex py-1 text-orange-400'><FaStar /><FaStar /><FaStar /></p>
                            <p className='py-2 text-base text-slate-700'>It was what i expected</p>
                            <p className='text-sm text-slate-400'>24/03/2023</p>
                        </div>
                        <div className=' border-b py-4 '>
                            <p className='md:text-xl text-base'>Ireri</p>
                            <p className='flex py-1 text-orange-400'><FaStar /><FaStar /></p>
                            <p className='py-2 text-base text-slate-700'>Right size, comfort and well packaged. What I expected from the image</p>
                            <p className='text-sm text-slate-400'>14/02/2023</p>
                        </div>
                        <div className=' border-b py-4 '>
                            <p className='md:text-xl text-base'>Chosen</p>
                            <p className='flex py-1 text-orange-400'><FaStar /><FaStar /><FaStar /></p>
                            <p className='py-2 text-base text-slate-700'>Wow just amazing</p>
                            <p className='text-sm text-slate-400'>03/01/2024</p>
                        </div>
                        
                        
                        
                        

                        <div className='flex gap-1 justify-center items-center my-3 md:my-6 '>
                            <p className= ' px-1 py-1 md:px-1 md:py-1 bg-slate-200 rounded-sm'><IoIosArrowBack/></p>
                            <p className= ' px-2 py-0 md:px-2 md:py-0 bg-orange-500 rounded-sm'>1</p>
                            <p className= ' px-2 py-0 md:px-2 md:py-0 bg-slate-200 rounded-sm'>2</p>
                            <p className= ' px-2 py-0 md:px-2 md:py-0 bg-slate-200 rounded-sm'>3</p>
                            <p className= ' px-2 py-0 md:px-2 md:py-0 bg-slate-200 rounded-sm'>4</p>
                            <p className= ' px-2 py-0 md:px-2 md:py-0 bg-slate-200 rounded-sm'>5</p>
                            <p className= ' px-1 py-1 md:px-1 md:py-1 bg-slate-200 rounded-sm'><IoIosArrowForward/></p>
                        </div>
                        
                    </div>

                    

                </div>

            </div>
        </div>
    
    </>
  )
}

export default Product