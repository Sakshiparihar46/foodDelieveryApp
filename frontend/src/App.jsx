import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import PlaceOrder from './pages/placeOrder/placeOrder.jsx';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/placeOrder' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App;
