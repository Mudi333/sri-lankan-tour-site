import express from "express"
import bcrypt from "bcrypt"
import { z } from "zod"
import { User } from "../models/User.js"

const router = express.Router()

const registerSchema = z.object({
  name: z.string().min(2),
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["TOURIST", "GUIDE"]),
})

router.post("/register", async (req, res) => {
  try {
    const parsed = registerSchema.parse(req.body)

    const existing = await User.findOne({
      where: { email: parsed.email },
    })
    if (existing) {
      return res.status(400).json({ message: "Email already in use" })
    }

    const passwordHash = await bcrypt.hash(parsed.password, 10)

    const user = await User.create({
      name: parsed.name,
      username: parsed.username,
      email: parsed.email,
      passwordHash,
      role: parsed.role,
    })

    return res.status(201).json({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
    })
  } catch (err) {
    if (err.name === "ZodError") {
      return res.status(400).json({ message: "Invalid input", errors: err.errors })
    }
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
})

export default router
