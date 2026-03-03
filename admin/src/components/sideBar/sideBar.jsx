import React from 'react'
import './SideBar.css';
import { assets } from '../../assets/assets';
function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>list items</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar
