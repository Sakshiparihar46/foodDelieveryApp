import React,{useContext, useState} from 'react';
import './placeorder.css';
import { StoreContext } from '../../context/context.jsx';
const PlaceOrder = () => {
  const {getTotalcartAmount,token,food_list,cartItems,url}=useContext(StoreContext);

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    state:"",
    city:"",
    pincode:"",
    country:"",
    phone:"",

  });

  const placeOrder=async(event)=>{
   event.preventDefault();
   let orderItems=[];
   food_list.map((item)=>{
    if(cartItems[item._id]>0){
      let itemInfo=item;
      itemInfo["quantity"]=cartItems[item._id];
      orderItems.push(itemInfo);
    }
   })
   console.log(orderItems);
   
  }

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }


    return (
   <form onSubmit={placeOrder} action="" className='place-order'>
    <div className='place-order-left'>
    <p className="title">Delivery Information</p>
    <div className="multi-fields">
      <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='first name' />
      <input  required name='lastName' onChange={onChangeHandler} value={data.lastName}  type="text" placeholder='last name'/>
    </div>
    <input  required name='email' onChange={onChangeHandler} value={data.email} type="text"  placeholder='email address' />
    <input  required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />

    <div className="multi-fields">
      <input  required  name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
      <input required   name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State'/>
    </div>
    <div className="multi-fields">
      <input required  name='pincode' onChange={onChangeHandler} value={data.pincode}  type="text" placeholder='pincode'/>
      <input required  name='country' onChange={onChangeHandler} value={data.country}  type="text" placeholder='Country'/>
    </div>
    <input  required  name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
    </div>
    <div className="place-order-right">
    <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-total-details">
                <p>SubTotal</p>
                <p>${getTotalcartAmount()}</p>
            </div>
                <hr />
             <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalcartAmount()===0?0:2}</p>
            </div>
                <hr />
            <div className="cart-total-details">
                <b>Total</b>
                <p>${getTotalcartAmount()===0?0:getTotalcartAmount()+2}</p>
            </div>
        </div>
            <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
    </div>
   </form>
  )
}

export default PlaceOrder
