import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';
const db=process.env.MONGO_URL;
export const connectDB=async()=>{
    await mongoose.connect(db).then(()=>{console.log("database is connected")})
}