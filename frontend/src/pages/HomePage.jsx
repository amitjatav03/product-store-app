import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const api = 'http://localhost:5000/api/products'
        const response = await axios.get(api);
        setProducts(response.data.data);
      } catch(error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, [])

  console.log("product data: ", products)

  return (
    
    <div className='w-full mx-auto flex gap-10 mt-10 flex-wrap justify-center'>
      {
        products.map((product, idx) => (
          <Product 
            key={idx}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))
      }
    </div>
  )
}

export default HomePage