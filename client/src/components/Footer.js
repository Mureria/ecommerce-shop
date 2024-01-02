import React from 'react'
import {FaTiktok, FaTwitter, FaInstagram, FaWhatsapp, FaFacebook, FaTelegram} from 'react-icons/fa'

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className='w-full text-xl bg-black text-gray-400 p-4'>
        <div className='max-w-[1200px] mx-auto my-10 grid grid-cols-2 md:grid-cols-5'>
         
          <div className='py-4'>
            <h1 className='text-gray-200 font-bold text-base'>Shopping Guide</h1>
            <p className ='text-base'>How do I pay?</p>
            <p className ='text-base'>How to apply aftersale/ Refund</p>
            <p className ='text-base'>how long does my order arrive?</p>
            <p className ='text-base'>Forgot Password?</p>
          </div>

          <div className='py-4'>
            <h1 className='text-gray-200 font-bold text-base'>Customer Help Center</h1>
            <p className ='text-base'>Account Settings</p>
            <p className ='text-base'>Dispute resolution policy</p>
            <p className ='text-base'>Delivery and Shipping</p>
            <p className ='text-base'>Terms and Conditions</p>
            <p className ='text-base'>After Sale Policy</p>
            </div>
          
          <div className='py-4'>
            <h1 className='text-gray-200 font-bold text-base'>Shop</h1>
            <p className ='text-base'>Track Order</p>
            <p className ='text-base'>Downloads</p>
            <p className ='text-base'>Flashsale</p>
            <p className ='text-base'>discounts</p>
          </div>

          <div className='col-span-2'>
            <h1 className='text-gray-200 font-bold mt-4 text-base'>Subscribe</h1>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloremque.</p>
            <form action="">
              <input type="text" placeholder='Enter Email...' className='w-full text-base p-2 my-2 bg-gray-800 ' />
              <button className='text-base bg-gray-800 p-2 rounded-md hover:bg-black/50 hover:border hover:text-gray-300 '>Subscribe</button>
            </form>
          </div>

        </div>
        <div className='flex justify-center items-center gap-4 py-4'>
        <FaWhatsapp size={18} />
        <FaFacebook size={18} />
        <FaInstagram size={18} />
        <FaTwitter size={18}/>
        <FaTiktok size={18}/>
        <FaTelegram size={18}/>
        </div>
        <h1 className='text-center text-sm text-gray-500'>{`All Rights Reserved ChosenSoles ${year}.`}</h1>

      </div>
    </>
    )
}

export default Footer