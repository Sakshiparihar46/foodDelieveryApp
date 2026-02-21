import React,{useState} from 'react'
import Navbar from './components/navbar/navbar.jsx'
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import PlaceOrder from './pages/placeOrder/placeOrder.jsx';
import Footer from './components/Footer/footer.jsx';
import AppDownload from './components/AppDownload/AppDownload.jsx';
import LoginPopup from './components/LoginPopup/Loginpopup.jsx';
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
      <Route path='/placeOrder' element={<PlaceOrder/>}/>
      </Routes>
      <AppDownload/>
    </div>
    <Footer/>
    </>
  )
}

export default App;
