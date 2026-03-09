import Navbar from './components/navbar/navbar'
import SideBar from './components/sideBar/sideBar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/add/add.jsx'
import List from './pages/list/list.jsx'
import Orders from './pages/orders/orders.jsx'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  

  return (
    <>
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <SideBar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
