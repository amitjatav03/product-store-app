import axios from 'axios'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductContextData } from '../contexts/ProductContext'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBinFill } from 'react-icons/ri'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const Product = ({name, id, idx, image, price}) => {
  const {fetchProducts} = useContext(ProductContextData);

  const deleteBtnHandler = async () => {
    try {
      const api = `${import.meta.env.VITE_BASE_URL}/${id}`
      await axios.delete(api)
      await fetchProducts();
      showToast();
    }
    catch (error) {
      console.log("error: ", err)
    }
  }

  return (  
    <div key={idx} className='p-3 bg-zinc-100 rounded-lg w-fit shadow-md'>
        <img src={image} className='w-52 h-52 mb-2 rounded-lg object-cover object-center' alt="" /> 
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='font-bold text-sm'>{name}</h1>
            <p className='text-sm font-semibold text-zinc-600'>${price}</p> 
          </div>
          <div className='flex gap-1'>
            <button onClick={deleteBtnHandler} className='bg-red-500 text-zinc-100 px-2 py-2 rounded-md text-lg hover:bg-red-600 transition-all ease-in cursor-pointer font-semibold'>
              <RiDeleteBinFill />
            </button>
            <Link to={`/edit/${id}`} className='bg-blue-500 text-zinc-100 px-2 py-2 rounded-md text-lg hover:bg-blue-600 transition-all ease-in cursor-pointer font-semibold'>
              <FaEdit />
            </Link> 
          </div>
        </div>
    </div>
  )
}

export default Product