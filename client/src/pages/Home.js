import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import Popular from '../components/Popular';
import Marquee from "react-fast-marquee";
import Slider from '../components/Slider'
import FAQ from '../components/FAQ';
import Cat from '../components/Cat';
import Partners from '../components/Partners';
import HotCategory from '../components/HotCategory';
import Trending from '../components/Trending';


const data = ['Nike', 'Adidas', 'New Armor', 'Converse', 'New Balance']

const Home = () => {
  return (
    <>
      <div className='w-full'>
        <div className='max-w-[1200px] mx-auto my-2 px-4'>
          <h3 className='text-2xl py-2'>Hi, Ireri</h3>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Step Up Your Shoe Game With Our Premium Shoes.</h1>
        </div>
        <div className='max-w-[1200px] mx-auto lg:my-8 my-4 px-4 relative'>
          <form action="" >
            <input type="text" placeholder='Search Shoe' className=' w-full md:w-[400px]  border border-gray-200 p-2 rounded-full pl-10' />
          </form>
          <FaSearch color='lightgray' className='absolute top-3 left-7'/>
        </div>
        <div className='max-w-[1200px] mx-auto px-4 justify-between my-10 hidden md:flex'>
        {data.map((item) => <p className='border px-8 py-2 rounded-full hover:border-yellow-300'>{item}</p>)}
        </div>

        <div className='w-full my-10 md:my-30' ><HotCategory/></div>


        <div className='w-full  bg-gray-100 my-20'>
          <div className='max-w-[1200px] my-10 mx-auto px-4 py-16'>
          <div className='grid grid-cols-2 gap-2 '>
          <div className='flex  flex-col justify-center items-start'>
            <h1 className='pb-10 md:pb-20 text-3xl md:text-5xl font-bold'>Shop through our collection</h1>
            <Link to='collection'><p className='font-medium text-base md:text-base border border-gray-800 py-3 px-5 rounded-md hover:bg-black hover:text-white ease-in-out duration-700'>Shop now</p></Link>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
          </div>
        </div>
          </div>
        </div>
      </div>

      <div className='w-full my-10 md:my-30' ><Trending/></div>


      <div className='w-full my-10 mx-auto py-10 px-4 rounded-md shadow-xl'>
        <Marquee>
          <Slider/>
        </Marquee>
        </div>

        <div className='w-full my-10 md:my-30' ><Popular/></div>


      <div className='w-full my-10 md:my-40'>
        <Cat/>
      </div>

      <div className='w-full my-10 md:my-40'>
        

        <div className='max-w-[1200px] my-40 mx-auto'>
          <FAQ/>
        </div>
        <Partners/>
      </div>
    </>
  )
}

export default Home