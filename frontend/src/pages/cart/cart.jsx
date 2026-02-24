import React from "react";
import './cart.css'
import { food_list } from "../../assets/assets";
import { useContext } from 'react';
import {StoreContext} from '../../context/context';
const Cart=()=>{

    const {cartItems,food_list,removeFromCart,getTotalcartAmount}=useContext(StoreContext);
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
                    <div>
                        <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className="cross">X</p>
                </div><hr />
                    </div>
                
                )
            }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-total-details">
                <p>SubTotal</p>
                <p>{getTotalcartAmount()}</p>
            </div>
                <hr />
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{2}</p>
            </div>
                <hr />
            <div className="cart-total-details">
                <b>Total</b>
                <p>{getTotalcartAmount()+2}</p>
            </div>
        </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
      <div className="cart-promocode">
        <div>
            <p>if you have to promo code,Enter it here</p>
            <div className="cart-promocode-input">
                <input type="text" placeholder="promo code"/>
                <button>submit</button>
            </div>
      </div>
      </div>
    </div>
    </div>
    )
}
export default Cart;
