import React from 'react'
import './ExploreMenu.css';
import {menu_list} from '../../assets/assets'
function ExploreMenu() {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1 className='explore-menu-text'>Explore our menu</h1>
        <p>choose from a diverse menu featuring a delectable array of dishes crafting with the finest ingrediants and satisfy your craving and elevate your dinner experience,one  delicious food at a time.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div key={index}className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default ExploreMenu
