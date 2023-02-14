import React from 'react'
import Menu from "./components/Menu"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartProvider} from "react-use-cart"
import Navbar from './components/Navbar'
import Cart from './components/Cart';
import Login from "./components/Login"
import SignUp from './components/SignUp'
import Home from './components/Home';
import Checkout from './components/Checkout'



const App = () => {
  return (
    <div>

<BrowserRouter>
        <Navbar />
        <CartProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/home" element={<Home />} />
          
          <Route path='/menu' element={<Menu/>} />
          <Route path ="/cart" element={<Cart/>} />
          <Route path ="/checkout" element={<Checkout/>} />
        
        </Routes>
        </CartProvider>
        
      </BrowserRouter>

     {/* <CartProvider>
      <Menu/>
      <Cart/>
      </CartProvider> */}
    </div>
  )
}

export default App
