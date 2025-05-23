import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from './contexts/Context.jsx'
import ProductContext from './contexts/ProductContext.jsx'


createRoot(document.getElementById('root')).render(
  <ProductContext>
    <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context>
  </ProductContext>  

)
