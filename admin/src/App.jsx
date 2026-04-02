import Navbar from './components/navbar/navbar.jsx'
import SideBar from './components/sideBar/sideBar.jsx'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/add/add.jsx'
import List from './pages/list/list.jsx'
import Orders from './pages/orders/orders.jsx'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const url="https://fooddelieveryapp-s1jk.onrender.com"

  return (
    <>
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <SideBar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list'element={<List url={url}/>}/>
          <Route path='/orders'element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
