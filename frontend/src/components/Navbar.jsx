import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { FaRegSquarePlus } from "react-icons/fa6";
    

const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='w-full flex items-center justify-between p-6'>
            <Link to={'/'}>
                <h1 className='uppercase font-[gilroy-bold] text-3xl text-zinc-500'>
                    Product Store
                </h1>
            </Link>

            <div className="nav-right">
                <Link to='/create' className='bg-green-500 hover:bg-green-600 transition-all linear px-3 py-2 font-bold rounded-lg text-white'>
                    Create Product
                </Link>

                <button>
                    
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar