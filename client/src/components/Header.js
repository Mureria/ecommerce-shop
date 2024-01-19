import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart, AiOutlineClose} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BiMenu} from 'react-icons/bi'
import { useState } from 'react'

import Marquee from "react-fast-marquee";



const Header = () => {

const [nav, setNav] = useState(false);


const logged = false;

const handleNav = () => {
  setNav(!nav)
}

  return (
   <>
   <div className='hidden md:block w-full bg-black text-white p-3'>
    <div className='flex items-center justify-between max-w-[1200px] pb-1 mx-auto border-b border-gray-800'>
      <Marquee>
        <h1 className='text-xl mr-[10rem]'>Enjoy Our Amazing SOLEFUL Discounts</h1>
        <a href="0797516617">Call or whatsapp: 0797516617</a>
      </Marquee>
    </div>
   </div>
    <div className='w-full bg-black text-white p-3'>
      <div className='flex items-center justify-between max-w-[1200px] mx-auto '>
        <div>
          <Link to='/'><h1 className='text-xl font-bold md:text-2xl my-4'>Chosen Soles</h1></Link>
        </div>
        <div className='hidden md:block'>
          <ul className='flex gap-6'>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='contact'>Contact</Link>
            <Link to='FAQ'>FAQs</Link>
          </ul>
        </div>
        <div className='hidden md:flex items-center gap-6'>
          <div >
            <Link to='cart' className='relative group'>
              <AiOutlineShoppingCart size={30}/>
              <p className='hidden group-hover:block absolute bottom-[-20px] text-black text-xs py-0 px-1 rounded-sm bg-slate-200'>Cart</p>
            </Link>
          </div>
          

          {logged ? (
            <div className='relative group'>
              <img
                alt=''
                src='https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='rounded-full object-cover w-9 h-9 group-hover:opacity-75'
              />
              <p className='hidden absolute bottom-[-20px] text-black text-xs py-0 px-1 rounded-sm bg-slate-200 group-hover:block'>
                Account
              </p>
          </div>
          
          ) : (
            <div>
              <Link to='register'><CgProfile size={30}/></Link>
            </div>
          )}

        </div>

        <div className='md:hidden' >
        {nav ?  <AiOutlineClose size={30} onClick={handleNav} /> : <BiMenu size={30} onClick={handleNav} className=''/> }
        </div>
      </div>
    </div>
    {nav ? <ul className='md:hidden h-screen absolute mt-4 bg-black text-white flex flex-col text-center max-w-[100%] text-2xl  w-full transform top-10 overflow-auto ease-in-out transition-all duration-500 z-20 '>
            <Link to='/' className='border-b border-gray-800 py-4'onClick={handleNav}>Home</Link>
            <Link to='about' className='border-b border-gray-800 py-4'onClick={handleNav}>About</Link>
            <Link to='contact' className='border-b border-gray-800 py-4'onClick={handleNav}>Contact</Link>
            <Link to='login' className='border-b border-gray-800 py-4'onClick={handleNav}>Login</Link>
            <Link to='register' className='border-b border-gray-800 py-4'onClick={handleNav}>Register</Link>
            <Link to='checkout' className='py-4'onClick={handleNav}>Cart</Link></ul> : 
            <ul className='md:hidden index-1000  absolute -top-[100%] bg-black text-white  flex text-2xl text-center flex-col w-full'>
            <Link to='/' className='border-b border-gray-800 py-4'>Home</Link>
            <Link to='about' className='border-b border-gray-800 py-4'>About</Link>
            <Link to='contact' className='border-b border-gray-800 py-4'>Contact</Link>
            <Link to='login' className='border-b border-gray-800 py-4'>Login</Link>
            <Link to='register' className='border-b border-gray-800 py-4'>Register</Link>
            <Link to='checkout' className='py-4'>Cart</Link></ul>}
    
   </>
    )
}

export default Header