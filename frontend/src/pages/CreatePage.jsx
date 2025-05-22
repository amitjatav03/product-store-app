import React, { useState } from 'react'

const CreatePage = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()

    const product = {
      productName,
      price,
      imageURL
    }
    console.log(product)
  }
  

  return (
    <div className='w-full'>
      <div className='w-[65%] mx-auto mt-20 flex flex-col gap-4 '>
        <h1 className='font-[gilroy-bold] text-center text-3xl text-zinc-600'>Create New Product</h1>
        <form onSubmit={submitHandler} className='flex flex-col gap-2'>
          <input 
            type="text" 
            placeholder='Product Name' 
            value={productName}
            onChange={(e) => {setProductName(e.target.value)}}
            className='border-1 border-zinc-600 rounded-md px-3 py-2 outline-green-500' 
          />
          <input 
            type="text" 
            placeholder='Price' 
            value={price}
            onChange={(e) => {setPrice(e.target.value)}}
            className='border-1 border-zinc-600 rounded-md px-3 py-2 outline-green-500' 
          />
          <input 
            type="text" 
            placeholder='Image URL' 
            value={imageURL}
            onChange={(e) => {setImageURL(e.target.value)}}
            className='border-1 border-zinc-600 rounded-md px-3 py-2 outline-green-500' 
          />
          <button className='bg-blue-400 cursor-pointer hover:bg-blue-500 transition-all ease-in px-4 py-2 rounded-lg text-zinc-100'>Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePage