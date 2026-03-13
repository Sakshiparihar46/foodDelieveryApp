import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import validator from 'validator';

// login user
const loginUser = async (req, res) => {
 
};

//token
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
// register user
const registerUser = async (req, res) => {
    const {name,password,email}=req.body;
    try{

        //checking email is in the database or not
       const exists=await userModel.findOne({email}) ;
       if(exists){
        return res.json({success:false,message:"User already exists"});
       }

       //validation for email format & strong password

       if(!validator.isEmail(email)){
        return res.json({success:false,message:"please enter a valid email"});
       }

       if(password.length<8){
        return res.json({success:false,meassage:"please enter the strong password"});
       }

       //hashing
       const salt=await bcrypt.genSalt(10);
       const hashedPassword=await bcrypt.hash(password,salt);

       const newUser=new userModel({
        name:name,
        email:email,
        password:hashedPassword
       })

      const user= await newUser.save();
      const token=createToken(user._id);
      res.json({success:true,token});
    }catch(err){
        console.log(err);
    }
  };

export { loginUser, registerUser };