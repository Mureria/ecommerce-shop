import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);


    const isLogged = true;
    const productId = '65a7cabe61ec9899209fe156'

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/products/${productId}`);
          setProducts(response.data); // Assuming the API response is an array of products
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
    
  return (
    <>
        <div className='w-full h- my-0'>
            <div className='max-w-[1200px] mx-auto my-2 mb-4 px-4 py-4  bg-slate-200'>
                <div className='flex gap-4 flex-col md:flex-row p-4 justify-between items-start'>
                    <div className=''>
                        <img src={products.image} alt='' className=' w-[500px] h-[300px] md:h-[500px]  object-cover'/>
                    </div>

                    <div className='flex flex-col flex-1'>
                        <h1 className='text-2xl text-[#333333]'>{products.name}</h1>
                        <p className='text-x text-orange-400 inline-block'>****</p>
                        <p className='text-xl text-blue-500'>41 customer reviews</p>

                        <div className='flex flex-1 gap-2 p-2 bg-slate-300 items-baseline'>
                            <p className='text-2xl text-orange-600'>Ksh {products.currentPrice}</p>
                            <p className='text-sm text-[#909399 line-through'>KSh {products.oldPrice}</p>
                            <p className='text-xs bg-orange-400 px-3  py-1 rounded-md'>{products.discount}% OFF</p>
                        </div>

                        <div className='grid grid-cols-3 mt-4 gap-7 items-center'>

                            <div className='text-sm text-[#333333] '>
                                <p>Shipping From:</p>
                            </div>
                            <div  className='col-span-2'>
                                <p>Local Dispatch</p>
                            </div>
                            <div>
                                <p>Color:</p>
                            </div>
                            <div className='col-span-2 border border-orange-600 w-20 py-0 px-2 text-center'>
                                <p >White</p>
                            </div>
                            <div>
                                <p>Size:</p>
                            </div>
                            <div className='flex items-baseline gap-2 col-span-2 flex-wrap'>
                                <p className='border border-orange-600  py-0 px-2 text-center'>36</p>
                                <p className='border  py-0 px-2 text-center'>37</p>
                                <p className='border  py-0 px-2 text-center'>38</p>
                                <p className='border  py-0 px-2 text-center'>39</p>
                                <p className='border  py-0 px-2 text-center'>40</p>
                                <p className='border  py-0 px-2 text-center'>41</p>
                                <p className='border  py-0 px-2 text-center'>42</p>
                                <p className='border  py-0 px-2 text-center'>44</p>
                                <p className='border  py-0 px-2 text-center'>45</p>
                            </div>
                            <div>
                                <p>Qty:</p>
                            </div>
                            <div className='flex items-center'>
                                <button onClick={() => setCount(count > 0 ? count-1 : 0)} className='border  bg-slate-300 py-1 px-1  '><FiMinus /></button>
                               <div className=' border-slate-300 border-y py-0 px-7 text-[#333333]'>{count}</div>
                               <button onClick={() => setCount(count + 1)} className='border bg-slate-300 py-1 px-1'><GoPlus/></button>

                            </div>
                        </div>


                        <div >
                            {isLogged ? (
                                <div className='flex md:flex mt-10 pb-6 border-b border-black/10'>
                                    <div>
                                        <Link to='/' className='w-full md:w-6/12 border mb-4 md:mb-0 border-orange-400 px-14 py-4 mr-4'>Add to Cart</Link> 
                                    </div>
                                    
                                    <div>
                                        <Link to='/checkout' className=' w-full md:w-6/12 border bg-orange-400 px-14 py-4'>Buy Now</Link>
                                    </div>
                                    
                                </div>
                                ): (
                                <div className='flex  md:flex mt-10 pb-6 border-b border-black/10'>
                                    <div>
                                        <Link to='/' className='w-full md:w-6/12 border mb-4 md:mb-0 border-orange-400 px-14 py-4 mr-4'>Add to Cart</Link> 
                                    </div>
                                    
                                    <div>
                                        <Link to='/login' className=' w-full md:w-6/12 border bg-orange-400 px-14 py-4'>Buy Now</Link>
                                    </div>    
                                </div>
                            )}
                        </div>

                            <div className='mt-4 flex gap-4'>
                                <p>Payment:</p>
                                <p>Mpesa, Airtel, lipapay, kcb</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ProductCard