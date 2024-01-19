import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Description = () => {
    const [products, setProducts] = useState([]);

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
      <div className="text-lg  inline-flex gap-4 items-center">
        <a href="#Description">
          <p className="px-6 py-3 bg-orange-500">Description</p>
        </a>
        <a href="#Reviews">
          <p>Reviews</p>
        </a>
      </div>
      <div className="border-b" />

      <div className="">
        <h1 id="Description" className="font-bold text-lg py-6">
          Description
        </h1>
        <img src="" alt="" />
        <p>{products.description}</p>
      </div>
    </>
  );
};

export default Description;
