import React from 'react'
import { Link } from 'react-router-dom'



const Checkout = () => {
  return (
    <div className='w-full h-full'>
        <div className='max-w-[1200px] mx-auto my-2 mb-4 px-4'>
            <div className='bg-slate-100 px-6 pb-10 pt-4 rounded'>
                <div className='flex  justify-between items-center'>
                    <div className='font-bold text-base md:text-lg'>Delivery Address</div>
                    <div className='border px-2 md:px-6 py-1 text-xs md:text-sm '>Add New Address</div>
                </div>
                <div className='flex flex-col md:flex-row gap-2 items-start md:items-center mt-4'>
                    <div className='border border-orange-500 px-2 md:px-6 py-1 text-sm'>Kevin</div>
                    <div className='text-sm text-[#606266]'>ireri </div>
                    <div className='text-sm text-[#606266]'>+254797516617</div>
                    <div className='text-sm text-[#606266]'>Kiambu,Kinoo,Kinoo Electricals and Electronics World KiliShop,KINOO,Mama Ngina Stage, Electricals and Electronics World frgrewwwww...</div>
                </div>
            </div>


            <div className='hidden md:flex mt-4   gap-3 px-4 py-4 rounded-sm text-xl font-medium'>
                <div className='basis-[30%]'>
                <p>Item</p>
                </div>
                <div className='basis-[20%] text-center'>
                <p>Unit Price</p>
                </div>
                <div className='basis-[20%] text-center'>
                <p>Quantity</p>
                </div>
                <div className='basis-[20%] text-center'>
                <p>Amount</p>
                </div>
                <div className='basis-[10%]'></div>
          </div>


          <div className='flex flex-col md:flex-row items-start md:items-center justify-center gap-3 px-4 py-4 rounded-sm mt-4'>
            <div className='basis-[30%]'>
              <div className='flex h-full flex-1 items-start gap-3'>
                <div>
                  <img  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='h-[100px] w-[100px]  object-cover'/>
                </div>
                <div className='w-[243px] m-0'>
                  <p className='text-base'>Men's artificial leather shoes Business casual shoes outdoor...</p>
                  <p className='text-sm text-[#909399]'>41 Black</p>
                  <p className='text-sm text-[#909399]'>Qty 1</p>
                </div>
              </div>
            </div>

            <div className='basis-[20%] text-center'>
              <p className='text-base'>KSh 1,399</p>
              <p className='text-sm line-through'>KSh 1,399</p>
            </div>

            <div className='flex basis-[20%] text-center justify-center'>
              <div className=' py-0 px-7 text-[#333333]'>1</div>
            </div>

            <div className='basis-[20%] text-center'>
              <p className='text-base'>KSh 1,399</p>
            </div>

            <div className='basis-[10%] text-center'>
              <p className='text-sm text-[#909399]'>Add to Wish</p>
              <p className='text-sm text-[#ff4444]'>Delete</p>
            </div>
          </div>


          <div className='flex gap-5 items-start md:gap-16 bg-slate-100 my-10  px-6 pb-10 pt-4 rounded'>
            <div className='font-bold text-base md:text-lg'>Payment Method</div>
            <div>
                <div className='flex gap-3 md:gap-7'>
                    <div className='border  border-orange-500 px-2 py-2 md:px-4 md:py-3 text-sm'>Mpesa</div>
                    <div className='border px-4 py-3 text-sm'>Online Payment</div>
                </div>

                <p className='text-sm mt-4 mb-2'>Confirm Phone No. then click 'Place Order' to generate payment request to your phone.</p>
                <p className='text-sm mb-4'>Enter your MPESA PIN on prompt pop-up on your phone to complete the payment.</p>

                <div className='flex'>
                    <div className='border py-1 px-2 md:py-2 md:px-6 bg-slate-200'>Mpesa No.:</div>
                    <div className='border py-1 px-3 md:py-2 md:px-6'>797516617</div>
                </div>
            </div>
          </div>

          <div className='flex justify-between items-end '>
            <div className='hidden md:flex'>
              <Link to='/' className='flex md:justify-end pb-4 text-orange-500 underline'>Continue Shopping</Link>
            </div>
            <div className='flex  flex-col w-[400px] justify-center  py-4'>
              <div className='border-b border-slate-200 pb-3'> 
                <p className='text-sm font-medium text-black/80 font-sans'>ORDER AMOUNT</p>
              </div>
              <div className='border-b border-slate-200 pb-3 pt-3'> 
                <div className='flex justify-between items-center'>
                  <p className='text-base text-[#909399] font-medium '>Goods Amount:</p>
                  <p className='text-base text-[#19191a] font-medium'>KSh 17,879</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-base text-[#909399] font-medium '>Shipping Fee:</p>
                  <p className='text-base text-[#19191a] font-medium pb-4'>+ KSh 388</p>
                </div>
                <div className='flex justify-between items-center border-t border-slate-200 pt-3'>
                  <p className='text-base md:text-lg text-[#909399] font-medium '>Pay Amount:</p>
                  <p className='text-base md:text-lg text-[#19191a] font-medium'>KSh 18,267</p>
                </div>
              </div>
              <button className='text-base md:text-lg w-full border bg-orange-400 px-14 py-3 mt-4'>Place Order</button>
            </div>
          </div>

            
      </div>
    </div>
  )
}

export default Checkout