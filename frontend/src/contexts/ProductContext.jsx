import axios from "axios";
import { createContext, useState } from "react";


export const ProductContextData = createContext();

const ProductContext = ({children}) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
      try {
        const api = `${import.meta.env.VITE_BASE_URL}`
        const response = await axios.get(api);
        setProducts(response.data.data); 
      } catch(error) {
        console.log(error);
      }
    }

    const val = {
        products,
        setProducts,
        fetchProducts
    }

    return (
        <ProductContextData.Provider value={val}>
            {children}
        </ProductContextData.Provider>
    )

}

export default ProductContext;