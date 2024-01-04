import React from 'react'
import { Link } from 'react-router-dom';

const shoes = [{
    images: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    brand: 'Air Jordan 4',
    amount: 'Kshs. 2800',
},
{
    images: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80',
    brand: 'Air Jordan 4',
    amount: 'Kshs. 2800',
},
{
    images: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80',
    brand: 'Air Jordan 4',
    amount: 'Kshs. 2800',
},
{
    images: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    brand: 'Air Jordan 4',
    amount: 'Kshs. 2800',
},
{
    images: 'https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    brand: 'Air Jordan 4',
    amount: 'Kshs. 2800',
},
];

const Men = () => {
  return (
    <>
        <div className='w-full'>
            <div className='max-w-[1200px] mt-6 mx-auto px-4'>
            <h1 className='text-2xl font-bold py-4 md:text-4xl'>Men</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5'>
                    {shoes.map((item)=>{
                        return (
                            <div className='shadow-lg'>
                                <Link to='/product'>
                                    <img src={item.images} alt='' className='	'/>
                                    <h1 className='text-lg px-2'>{item.brand}</h1>
                                    <h1 className='text-xl font-bold px-2 pb-6'>{item.amount}</h1>
                                </Link> 
                            </div>
                            )
                        })}
                </div>    
            </div>   
        </div>   
    </>
  )
}

export default Men