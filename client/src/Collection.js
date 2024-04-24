import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
import Slider from './components/Slider';
import axios from 'axios';
import { useTheme } from './Theme';
import { Link } from 'react-router-dom';

const Collection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { isDarkMode } = useTheme();



    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get("http://localhost:5000/products");
            setProducts(response.data);
            setLoading(false);
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
        <div className='w-full text-xl md:text-4xl'>
            
            <div className='max-w-[1200px] my-4 mx-auto rounded-md'>
            <h1 className="text-2xl font-bold py-4 md:text-4xl">Collection</h1>
                <div className=''>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                    {products.map((product, index) => {
                return (
                  <div key={index} className="shadow-md hover:shadow-lg">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={`/product/${product._id}`}
                    >
                      <img
                        className="object-cover h-[150px] w-[200px]"
                        src={product.image}
                        alt=""
                      />
                      <h1
                        className={`text-lg px-2 py-3 ${
                          isDarkMode ? "text-[#707070]" : ""
                        }`}
                      >
                        {product.name}
                      </h1>
                      {/* <h1 className={`text-base font-normal text-gray-400 px-2 pb-6 ${isDarkMode ? 'text-[#707070]' : ''}`}>
                    {product.category.name}
                  </h1> */}
                      <h1
                        className={`text-sm px-2 text-decoration-line: line-through ${
                          isDarkMode ? "text-[#707070]" : ""
                        }`}
                      >
                        Kshs. {product.oldPrice.toLocaleString()}
                      </h1>
                      <h1
                        className={`text-xl font-bold px-2 pb-6 ${
                          isDarkMode ? "text-[#707070]" : ""
                        }`}
                      >
                        Kshs. {product.currentPrice.toLocaleString()}
                      </h1>
                    </Link>
                  </div>
                );
              })}
                    </div>
                </div>
                <div className='max-w-[1440px] my-4 mx-auto py-4 px-4 rounded-md shadow-xl'>
                            <Marquee>
                                <Slider/>
                            </Marquee>
                        </div>
            </div>
        </div>
    </>
  )
}

export default Collection