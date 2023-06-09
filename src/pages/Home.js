import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import Popular from '../components/Popular';
import Marquee from "react-fast-marquee";
import Slider from '../components/Slider'
import FAQ from '../components/FAQ';


const data = ['Nike', 'Adidas', 'New Armor', 'Converse', 'New Balance'];

const Home = () => {
  return (
    <>
      <div className='w-full'>
        <div className='max-w-[1440px] mx-auto my-2 px-4'>
          <h3 className='text-2xl py-2'>Hi, Ireri</h3>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Step Up Your Shoe Game With Our Premium Shoes.</h1>
        </div>
        <div className='max-w-[1440px] mx-auto lg:my-8 my-4 px-4 relative'>
          <form action="" >
            <input type="text" placeholder='Search Shoe' className=' w-full md:w-[400px]  border border-gray-200 p-2 rounded-full pl-10' />
          </form>
          <FaSearch color='lightgray' className='absolute top-3 left-7'/>
        </div>
        <div className='max-w-[1440px] mx-auto my-2 px-4 flex  justify-between my-10'>
         {data.map((item) => <p>{item}</p>)}
        </div>
        <div className='w-full'>
          <div className='max-w-[1440px] my-4 mx-auto px-4 py-4 bg-gray-100  rounded-md'>
          <div className='grid grid-cols-2 gap-2 '>
          <div className='flex  flex-col justify-center items-start'>
            <h1 className='pb-10 md:pb-20 text-3xl md:text-5xl font-bold'>Shop through our collection</h1>
            <Link to='collection'><p className='font-medium text-l md:text-xl border border-gray-800 py-3 px-5 rounded-md'>Shop now</p></Link>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
          </div>
        </div>
          </div>
        </div>
          <div><Popular/></div>
      </div>
      <div className='w-full my-4 md:my-10'>
        <div className='max-w-[1440px] my-4 mx-auto py-4 px-4 rounded-md shadow-xl'>
        <Marquee>
          <Slider/>
        </Marquee>
        </div>
        <div className='max-w-[1440px] my-4 mx-auto'>
          <FAQ/>
        </div>
      </div>
    </>
  )
}

export default Home