import React,{useContext,useState,useEffect} from 'react';
import './myorders.css';
import {StoreContext} from '../../context/context.jsx'
function MyOrders() {
  const {url,token}=useContext(StoreContext);
  const [data,setData]=useState([]);

  const fetchOrders=async()=>{
    const response=await axios.post(url+"/api/orers/userorders",{},{header:{token}});
    setData(response.data.data);
    console.log(response.data.data);
  }

  useEffect(()=>{
    if(token){
      fetchOrders();
    }
  },[])
  return (
    <div>
      
    </div>
  )
}

export default MyOrders;
