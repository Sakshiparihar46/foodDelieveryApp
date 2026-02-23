import React from "react";
import './cart.css'
import { food_list } from "../../assets/assets";
import { useContext } from 'react';
import {StoreContext} from '../../context/context';
const Cart=()=>{

    const {cartItems,food_list,removaFromCart}=useContext(StoreContext);
    return(
         <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,indx)=>{
            if(cartItems[item._id]>0){
                return(
                <div className="cart-items-title card-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price*cartItems[item._id]}</p>
                    <p>X</p>
                </div>
                )
            }
        })}
      </div>
    </div>
    )
}
export default Cart;
