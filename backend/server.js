import express from 'express'
import cors from 'cors'
import { connectDB }from"./config/db.js";
import foodRouter from './Routes/foodRoute.js';


const app=express();
let port=3000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter);

app.get("/",(req,res)=>{
    res.send("hello user");
});
app.listen(port,()=>{
    console.log(`server is listening on port${port}`);
});