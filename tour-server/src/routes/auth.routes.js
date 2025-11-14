import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import { validateUser } from "../validators/validateUser.js";

const router = express.Router();

router.post("/register", validateUser, async (req, res) => {
  try {
    const { name, username, email, password, role } = req.body;

    // Check if email exists
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      username,
      email,
      passwordHash,
      role,
    });

    return res.status(201).json({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;