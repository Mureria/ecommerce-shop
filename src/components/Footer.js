import React from 'react'
import {FaTiktok, FaTwitter, FaInstagram, FaWhatsapp, FaFacebook, FaTelegram} from 'react-icons/fa'

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className='w-full text-xl bg-black text-gray-400 p-4'>
        <div className='max-w-[1440px] mx-auto my-2 grid grid-cols-2 md:grid-cols-6'>
          <div className='py-4'>
            <h1 className='text-gray-200 font-bold'>About</h1>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
          </div>
          <div className='py-4'>
            <h1 className='text-gray-200 font-bold'>Partners</h1>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            </div>
          <div className='py-4'>
          <h1 className='text-gray-200 font-bold'>Policy</h1>
          <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p></div>
          <div className='py-4'>
            <h1 className='text-gray-200 font-bold'>legal</h1>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p>
            <p>Lorem ipsum colum</p></div>
          <div className='col-span-2'>
            <h1 className='text-gray-200 font-bold mt-4'>Subscribe</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloremque.</p>
            <form action="">
              <input type="text" placeholder='Enter Email...' className='w-full p-2 my-2 bg-gray-800 ' />
              <button className='bg-gray-800 p-2 rounded-md '>Subscribe</button>
            </form>
            </div>
        </div>
        <div className='flex justify-center items-center gap-10 py-4'>
        <FaWhatsapp size={20} />
        <FaFacebook size={20} />
        <FaInstagram size={20} />
        <FaTwitter size={20}/>
        <FaTiktok size={20}/>
        <FaTelegram size={20}/>
        </div>
        <h1 className='text-center text-xl text-gray-500'>{`All Rights Reserved ChosenSoles ${year}.`}</h1>

      </div>
    </>
    )
}

export default Footer