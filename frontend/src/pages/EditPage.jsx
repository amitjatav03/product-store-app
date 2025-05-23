import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContextData } from '../contexts/ProductContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const EditPage = () => {
  const {id} = useParams();
  const {fetchProducts} = useContext(ProductContextData)
  const navigate = useNavigate();
  
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');
  
  const api = `${import.meta.env.VITE_BASE_URL}/${id}`

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await axios.get(api);
            const product = response.data.data[0];
            setProductName(product.name);
            setPrice(product.price);
            setImageURL(product.image);

        } catch (error) {
            console.log("Error Fetching Product", error)
        }
    }

    fetchProduct();
  }, [id]);



  const submitHandler = async (e) => {
    e.preventDefault()

    const product = {
      name: productName,
      price: price,
      image: imageURL
    }

    await axios.put(api, product)
    fetchProducts();
    navigate('/')
    console.log(product)
  }
  

  return (
    <div className='w-full'>
      <div className='w-[65%] mx-auto mt-20 flex flex-col gap-4 '>
        <h1 className='font-[gilroy-bold] text-center text-3xl text-zinc-600'>Edit Product</h1>
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
          <button className='bg-blue-400 cursor-pointer hover:bg-blue-500 transition-all ease-in px-4 py-2 rounded-lg text-zinc-100'>Update Product</button>
        </form>
      </div>
    </div>
  )
}

export default EditPage