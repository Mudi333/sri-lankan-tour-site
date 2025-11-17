// src/validators/validateLogin.js
import { check } from "express-validator"

export const validateLogin = [
  check("username")
    .notEmpty()
    .withMessage("username is required"),
  check("password")
    .notEmpty()
    .withMessage("password is required"),
]
