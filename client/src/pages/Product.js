import React from 'react'

const Product = () => {
  return (
    <>
        <div className='w-full h- my-0'>
            <div className='max-w-[1200px] mx-auto my-2 mb-4 px-4 py-4  bg-slate-200'>
                <div className='flex gap-4 flex-col md:flex-row p-4 justify-between items-start'>
                    <div className=''>
                        <img src='https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className=' h-[300px] object-contain'/>
                    </div>

                    <div className='flex flex-col flex-1'>
                        <h1 className='text-2xl text-[#333333]'>original nike airforce 1 shoes white White 36</h1>
                        <p className='text-x text-orange-400 inline-block'>****</p>
                        <p className='text-xl text-blue-500'>41 customer reviews</p>

                        <div className='flex flex-1 gap-2 p-2 bg-slate-300 items-center'>
                            <p className='text-2xl text-orange-600'>KSh 2,650</p>
                            <p className='text-sm text-[#909399'>KSh 3,900</p>
                            <p className='text-xs bg-orange-300 px-1 rounded-md'>32% off</p>
                        </div>

                        <div className='grid grid-cols-2 mt-4 gap-7 items-center'>

                            <div className='text-sm text-[#333333] '>
                                <p>Shipping From:</p>
                            </div>
                            <div>
                                <p>Local Dispatch</p>
                            </div>
                            <div>
                                <p>Color:</p>
                            </div>
                            <div className='border border-orange-600 w-20 py-0 px-2 text-center'>
                                <p >White</p>
                            </div>
                            <div>
                                <p>Size:</p>
                            </div>
                            <div className='border border-orange-600 w-8 py-0 px-2 text-center'>
                                <p className='m-0 p-0'>36</p>
                            </div>
                            <div>
                                <p>Qty:</p>
                            </div>
                            <div>
                                <p>1</p>
                            </div>
                        </div>

                        <div className='mt-4'>
                                <button className='border border-orange-400 px-14 py-4 mr-4'>Add to Cart</button>
                                <button className='border bg-orange-400 px-14 py-4'>Buy Now</button>
                            </div>

                            <div className='mt-4 flex gap-4'>
                                <p>Payment:</p>
                                <p>Mpesa, Airtel, lipapay, kcb</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Product