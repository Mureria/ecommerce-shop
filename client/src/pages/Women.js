import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const Men = () => {
        const [products, setProducts] = useState([]);
        const [loading, isLoading] = useState(true);

        useEffect(() => {
          const fetchProducts = async () => {
            isLoading(true)

            try {
              const response = await axios.get(`http://localhost:5000/products/category/65a7c87661ec9899209fe13e`);
              setProducts(response.data);
              isLoading(false)
            } catch (error) {
              console.error("Error fetching products:", error);
            }
          };
      
          fetchProducts();
        }, []);

        if (loading) {
          return (
            <div className="flex h-screen items-center justify-center md:text-3xl ">
              Loading...
            </div>
          );
        }
  return (
    <>
        <div className='w-full'>
            <div className='max-w-[1200px] mt-6 mx-auto px-4'>
            <h1 className='text-2xl font-bold py-4 md:text-4xl'>Women</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5'>
                    {products.map((item)=>{
                        return (
                            <div className='shadow-lg' >
                                <Link key={item._id} to={`/product/${item._id}`}>
                                    <img src={item.image} alt='' className='h-[150px] w-full object-cover'/>
                                    <h1 className='text-lg px-2 pt-4'>{item.name}</h1>
                                    <h1 className='text-sm font-light px-2 text-decoration-line: line-through'>Ksh {item.oldPrice.toLocaleString()}</h1>
                                    <h1 className='text-xl font-bold px-2 pb-6'>Ksh {item.currentPrice.toLocaleString()}</h1>
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