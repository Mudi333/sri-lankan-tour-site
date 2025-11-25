

import express, { Request,Response,NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import User from "../models/User";
import { validateRegister } from "../validators/validateUser";

import { validateLogin } from "../validators/validateLogin";
import { createError } from "../utilities/helpers";
import { authenticate, AuthRequest } from "../middleware/authenticate";
import { authorize } from "../middleware/authorize";




function CreateJWT(res){
  const token = jwt.sign(
        { userId: user.get("id"), role: user.get("role") },
        secret,
        { expiresIn: "2h" }

      );
      return token


}


const router = express.Router();

//----------------------------------------------test--------------
router.get("/test", (req, res) => {
  res.send("Login route works but use POST to login!");
});
//---------------------------
router.post(
  "/register",
  validateRegister,
  async (req: any, res: any, next: any) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: errors.array()[0].msg,
          errors: errors.array(),
        });
      }
      const { name, username, email, password, role } = req.body;

      const existing = await User.findOne({
        where: { email },
      });
      if (existing) {
        return res
          .status(400)
          .json({ message: "Email already in use.Do you want to sign in?" });
      }
      const existingUsername = await User.findOne({
        where: { username },
      });
      if (existingUsername) {
        return res
          .status(400)
          .json({ message: "please enter differant username" });
      }

      const hash = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        username,
        email,
        passwordHash: hash,
        role,
      });

const token =CreateJWT (user)


      return res.status(201).json({
        msg: "User registered",
        user: {
          id: user.get("id"),
          name: user.get("name"),
          username: user.get("username"),
          email: user.get("email"),
          role: user.get("role"),
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "server error" });
    }
  }
);
//----------------------------------login-----------------------

router.post(
  "/login",
  validateLogin,async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: errors.array()[0].msg,
          errors: errors.array(),
        });
      }

      const { username, password } = req.body;

      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res
          .status(400)
          .json({ message: "Invalid username or password" });
      }
      const match = await bcrypt.compare(
        password,
        user.get("passwordHash") as string
      );
      if (!match) {
        return res.status(400).json({ message: "invalide credintials" });
      }

      // const secret = process.env.JWT_SECRET;
      // if (!secret) {
      //   return res.status(500).json({ message: "JWT secret not configured" });
      // }

      // const token = jwt.sign(
      //   { userId: user.get("id"), role: user.get("role") },
      //   secret,
      //   { expiresIn: "2h" }
      // );

      const expiresAt = Date.now() + 2 * 60 * 60 * 1000;

      return res.json({
        msg: "Login successful",
        token,
        expiresAt,
        user: {
          id: user.get("id"),
          name: user.get("name"),
          username: user.get("username"),
          email: user.get("email"),
          role: user.get("role"),
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ messsage: "Server error" });
    }
  }
);
// GET /users/me  (protected)
router.get("/me", authenticate, async (req: AuthRequest, res, next) => {
  try {
    const userId = req.user?.userId; // from token payload

    if (!userId) {
      return res.status(401).json({ error: "Invalid token payload" });
    }

    const user = await User.findByPk(userId, {
      attributes: ["id", "name", "username", "email", "role", "createdAt"],
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      msg: "Token is valid",
      user,
    });
  } catch (err) {
    next(err);
  }
});

//----------------------------------only admin can get all users-----------------------
router.get(
  "/admin-area",
  authenticate,
  authorize("ADMIN"),
(req: AuthRequest,res)=>{
    res.json({message:'Welcome ADMIN! to the admin area!'});
});
router.get(
  "/tourist-area",
  authenticate,
  authorize("TOURIST"),
  (req: AuthRequest, res) => {
    res.json({ msg: "Welcome, TOURIST! This is your area." });
  }
);

router.get(
  "/guide-or-admin",
  authenticate,
  authorize("GUIDE", "ADMIN"),
  (req: AuthRequest, res) => {
    res.json({ msg: "Hello GUIDE/ADMIN, you can see this." });
  }
);

export default router;
