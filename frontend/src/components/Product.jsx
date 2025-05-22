import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'

const Product = ({name, idx, image, price}) => {

  return (  
    <div key={idx} className='p-3 bg-zinc-100 rounded-lg w-fit shadow-md'>
        <img src={image} className='w-52 h-52 mb-2 rounded-lg object-cover object-center' alt="" /> 
        <h1 className='font-bold'>{name}</h1>
        <p className='text-sm font-semibold text-zinc-600'>${price}</p> 
    </div>
  )
}

export default Product