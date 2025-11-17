// import express from "express";
// import bcrypt from "bcrypt";
// import { User } from "../models/User.js";
// import { validateUser } from "../validators/validateUser.js";

// const router = express.Router();

// router.post("/register", validateUser, async (req, res) => {
//   try {
//     const { name, username, email, password, role } = req.body;

//     // Check if email exists
//     const existing = await User.findOne({ where: { email } });
//     if (existing) {
//       return res.status(400).json({ message: "Email already in use" });
//     }

//     // Hash password
//     const passwordHash = await bcrypt.hash(password, 10);

//     // Create user
//     const user = await User.create({
//       name,
//       username,
//       email,
//       passwordHash,
//       role,
//     });

//     return res.status(201).json({
//       id: user.id,
//       name: user.name,
//       username: user.username,
//       email: user.email,
//       role: user.role,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;




import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import {validationResult} from "express-validator"
import User from "../models/User.js"
import{validateRegister} from "../validators/validateUser.js"
import { validateLogin } from "../validators/validateLogin.js"
import { createError } from "../utilities/helpers.js"


const router = express.Router()


//----------------------------------------------register--------------


router.post("/register", validateRegister,async(req:any,res:any,next:any) => {
  try{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message:errors.array()[0].msg,
        errors:errors.array(),
      })
    }
    const { name, username, email, password, role } = req.body

    const existing = await User.findOne({
      where:{email},
    })
    if(existing){
      return res.status(400).json({message: "Email already in use.Do you want to sign in?"})
    }
    const existingUsername =await User.findOne({
      where: { username },
    })
    if (existingUsername){
    return res.status(400).json({message: "please enter differant username"})
  }

  const hash= await bcrypt.hash(password, 10)
  
 
const user = await User.create({
  name,
  username,
  email,
  passwordHash: hash,
  role,
})

return res.ststus(201).json({
      msg: "User registered",
      user: {
  id:user.id,
  name:user.name,
  username: user.username,
  email: user.email,
  role: user.role,
      }


})
  }catch (err) {
    console.error(err)
    res.status(500).json({message: "server error"})
 
  }
  });
  //----------------------------------login-----------------------


  router.post("/login", validateLogin, async (req,res,next) => { 
    try {    const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({
   message:errors.array()[0].msg,
        errors : errors.array(),
        })
     
      }
  
 const{ username, password} =req.body


const user =await User.findOne({where: {username}})
if (!user) {
  return res.status(400).json({message: "Invalid username or password"})
}
const match = await bcrypt.compare(password,user.passwordHash)
if (!match) {
  return res.status(400).json ({message:"invalide credintials"})
}


const secret = process.env.JWT_SECRET;
if (!secret) {
  return res.status(500).json({ message: "JWT secret not configured" });
}

const token = jwt.sign(
  { userId: user.id, role: user.role },
  secret,
  { expiresIn: "2h" }
);


const expiresAt = Date.now() + 2 * 60 * 60 * 1000

return res.json({
  msg: "Login successful",
  token,
  expiresAt,
  user: {
    id: user.id,
    name: user.name,
    username: user.username,
    email:user.email,
    role: user.role,
  },


})
}catch (err){
  console.error(err)
  res.status(500).json({ messsage: "Server error"})
}
    
      })
   

export default router



