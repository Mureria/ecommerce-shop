import React from 'react'
import {FaTiktok, FaTwitter, FaInstagram, FaWhatsapp, FaFacebook, FaTelegram} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className='w-full text-base bg-black text-gray-400 p-4'>
        <div className='max-w-[1200px] mx-auto py-10 grid grid-cols-2 md:grid-cols-5'>
         
          <div className='py-4'>
            <h1 className='text-gray-300 font-medium text-base pb-2'>Shopping Guide</h1>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>How do I pay?</p>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>How to apply aftersale/ Refund</p>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>how long does my order arrive?</p>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>Forgot Password?</p>
          </div>

          <div className='py-4'>
            <h1 className='text-gray-300 font-medium text-base pb-2'>Customer Help Center</h1>
            <Link to="/FAQ" className="text-sm hover:underline cursor-pointer pb-1">
                FAQs
              </Link>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>Account Settings</p>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>Dispute resolution policy</p>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>Delivery and Shipping</p>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>Terms and Conditions</p>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>After Sale Policy</p>
            </div>
          
          <div className='py-4'>
            <h1 className='text-gray-300 font-medium text-base pb-2'>Shop</h1>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>Track Order</p>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>Downloads</p>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>Flashsale</p>
            <p className ='text-sm hover:underline cursor-pointer pb-1'>discounts</p>
          </div>

          <div className='col-span-2'>
            <h1 className='text-gray-300 font-medium mt-4 text-base pb-2'>Subscribe</h1>
            <p className='text-sm'>Get ahead of the game: Unveil premium shoes as soon as they hit shelves!</p>
            <form action="">
              <input type="text" placeholder='Enter Email...' className='w-full text-sm p-3 my-2 bg-[#141414] outline-none' />
              <button className='text-base bg-[#141414] p-2 rounded-md hover:bg-[#0b0b0b] '>Subscribe</button>
            </form>
          </div>

        </div>
        <div className='flex justify-center items-center gap-4 py-4'>
        <FaWhatsapp className='cursor-pointer hover:text-gray-300' size={18} />
        <FaFacebook className='cursor-pointer hover:text-gray-200' size={18} />
        <FaInstagram className='cursor-pointer hover:text-gray-200' size={18} />
        <FaTwitter className='cursor-pointer hover:text-gray-200' size={18}/>
        <FaTiktok className='cursor-pointer hover:text-gray-200' size={18}/>
        <FaTelegram className='cursor-pointer hover:text-gray-200' size={18}/>
        </div>
        <h1 className='text-center text-sm text-gray-500'>{`All Rights Reserved ChosenSoles ${year}.`}</h1>

      </div>
    </>
    )
}

export default Footer