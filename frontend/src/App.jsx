import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { ContextData } from './contexts/Context'
import EditPage from './pages/EditPage'


const App = () => {
  const {theme} = useContext(ContextData)


  return (
    <div data-theme={theme} className='w-full pb-20 bg-white text-zinc-900 font-[gilroy]'>
      <div className='max-w-[1140px] mx-auto'>
        <Navbar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/edit/:id' element={<EditPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App