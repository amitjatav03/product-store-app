import React, { useContext, useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from 'axios';
import { ProductContextData } from '../contexts/ProductContext';
import Spinner from '../components/Spinner';

const HomePage = () => {
  const {products, setProducts, fetchProducts} = useContext(ProductContextData);

  useEffect(() => {  
    fetchProducts();
  }, [])
  
  console.log("product data: ", products)

  if(products.length === 0) {
    
  }
  
  return (
    
    <div className='w-full mx-auto flex gap-10 mt-10 flex-wrap justify-center'>
      {
        (products.length === 0) ? ( <h1>No Products is Available</h1> ) :

        products.map((product, idx) => (
          <Product 
            key={idx}
            id={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
            onDelete={fetchProducts}
          />
        ))
      }
    </div>
  )
}

export default HomePage