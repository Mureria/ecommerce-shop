import React from 'react'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";


const Cat = () => {
  return (
    <div className='w-full bg-slate-100'>
        <div className=' flex justify-between max-w-[1200px] py-16 mx-auto px-4 '>
            <div className='flex gap-10'>
                <div><TbTruckDelivery  size={53} color='#2b2b2b'/></div>
                <div>
                    <div className=' text-[#2b2b2b] text-sm md:text-xl  font-bold'>Free Shipping</div>
                    <div className='font-medium text-base text-[#8f8f8f]'>On all orders over N150,000</div>
                </div>
            </div>   
            <div className='flex gap-10'>
                <div><MdOutlineSupportAgent  size={53} color='#2b2b2b'/></div>
                <div>
                    <div className='text-[20px] text-[#2b2b2b] text-sm md:text-xl  font-bold'>Dedicated Support</div>
                    <div className='font-medium text-base text-[#8f8f8f]'>Quick response 24/7</div>
                </div>
            </div>   
            <div className='flex gap-10'>
                <div><RiMoneyDollarCircleLine size={53} color='#2b2b2b'/></div>
                <div>
                    <div className='text-[20px] text-[#2b2b2b] text-sm md:text-xl  font-bold'>Money Back Guarantee</div>
                    <div className='font-medium text-base text-[#8f8f8f]'>Worry-free shopping</div>
                </div>
            </div>   
        </div>   
    </div> 
  )
}

export default Cat