import React from 'react'
import ProductList from './Products';


const Trending = () => {
  return (
    <>
        <div className='w-full'>
            <div className='max-w-[1200px] mt-6 mx-auto px-4'>
               <ProductList title='Featured'/>
            </div>   
        </div>   
    </>
  )
}

export default Trending