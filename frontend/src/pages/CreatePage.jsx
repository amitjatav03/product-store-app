import { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ProductContextData } from '../contexts/ProductContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const CreatePage = () => {
  const {fetchProducts} = useContext(ProductContextData)
  
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');
  const api = `${import.meta.env.VITE_BASE_URL}/`

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault()

    const product = {
      name: productName,
      price: price,
      image: imageURL
    }

    try {
      await axios.post(api, product);
      await fetchProducts();
      toast.success('Product created successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => navigate('/') 
      });

    } catch(error) {
      toast.error('Failed to create product!', {
        position: "top-right",
        autoClose: 3000,
      });
      console.log("Error Creating Product: ", error)
    }
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
      <ToastContainer />
    </div>
  )
}

export default CreatePage