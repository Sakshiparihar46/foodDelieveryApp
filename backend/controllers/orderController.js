import orderModel from "../models/OrderModel.js";  
import userModel from "../models/userModel.js";
import stripe, { Stripe } from 'stripe';

const stripe =new Stripe(process.env.STRIPE_SECRET-KEY);

//placing user Order 
const placeOrder=async (req,res)=>{
    
}

export {placeOrder};