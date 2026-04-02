import express from 'express'
import cors from 'cors'
import { connectDB }from"./config/db.js";
import foodRouter from './Routes/foodRoute.js';
import dotenv from "dotenv";
dotenv.config();
import userRouter from './Routes/userRoute.js';
import cartRouter from './Routes/cartRoute.js';
import orderRouter from './Routes/orderRoute.js';


const app=express();
const port = process.env.PORT || 3000;

// body parsers for POST data
app.use(express.json());// parse application/json
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "https://food-delievery-app-cmfj.vercel.app", 
  credentials: true
}));

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter);
app.use("/images", express.static('uploads'));  
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.get("/",(req,res)=>{
    res.send("hello user");
});
app.listen(port,()=>{
    console.log(`server is listening on port${port}`);
});

