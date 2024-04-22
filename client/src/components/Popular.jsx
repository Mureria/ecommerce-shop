import React from 'react'
import ProductList from './Products';



const Popular = () => {

  return (
    <>
        <div className='w-full'>
            <div className='max-w-[1200px] mt-6 mx-auto px-4'>
                <ProductList title='Popular'/>
            </div>   
        </div>   
    </>
  )
}

export default Popular