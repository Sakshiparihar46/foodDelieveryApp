import mongoose from 'mongoose';

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sakshiparihargdg24:OzFP7Oq5nusosXB8@cluster0.fzdq7xw.mongodb.net/?appName=Cluster0').then(()=>{console.log("database is connected")})
}