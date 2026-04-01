import React,{useState} from 'react'
import Navbar from './components/navbar/Navbar.jsx';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import PlaceOrder from './pages/placeOrder/placeOrder.jsx';
import Footer from './components/Footer/footer.jsx';
import LoginPopup from './components/LoginPopup/Loginpopup.jsx';
import Verify from './pages/verify/verify.jsx';
import MyOrders from './pages/myorders/myorders.jsx';
function App() {

  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      <Route path='/verify' element={<Verify/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;
