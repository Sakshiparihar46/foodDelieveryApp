import React,{useContext} from 'react';
import './placeorder.css';
import { StoreContext } from '../../context/context';
const PlaceOrder = () => {
  const {getTotalcartAmount}=useContext(StoreContext);

  return (
   <form action="" className='place-order'>
    <div className='place-order-left'>
    <p className="title">Delivery Information</p>
    <div className="multi-fields">
      <input type="text" placeholder='first name' />
      <input type="text" placeholder='last name'/>
    </div>
    <input type="text"  placeholder='email address' />
    <input type="text" placeholder='Street' />

    <div className="multi-fields">
      <input type="text" placeholder='City'/>
      <input type="text" placeholder='State'/>
    </div>
    <div className="multi-fields">
      <input type="text" placeholder='pin-code'/>
      <input type="text" placeholder='Country'/>
    </div>
    <input type="text" placeholder='Phone' />
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
            <button>PROCEED TO PAYMENT</button>
        </div>
    </div>
   </form>
  )
}

export default PlaceOrder
