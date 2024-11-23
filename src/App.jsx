import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      <Footer/>

      <Toaster
      position="top-center"
      reverseOrder={false}
    />
    </BrowserRouter>
    </>
  )
}

export default App
