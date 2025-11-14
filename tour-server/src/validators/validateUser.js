import {check, validationResult }from "express-validator";

export const validateUser = [

check("name")
.notEmpty()
.withMessage("name is required")
.isLength({min :2})
.withMessage ("name must be at least 2 characters"),


check ("username")
.notEmpty()
.withMessage ("username is requred")
.matches(/^[a-zA-Z0-9]+$/)
.withMessage("invalid username"),

 check("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email"),
    


      check("password")
    .notEmpty()
    .withMessage("password is required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)
    .withMessage("invalid password"),


      check("role")
    .notEmpty()
    .withMessage("role is required")
    .isIn(["TOURIST", "GUIDE"])
    .withMessage("role must be TOURIST or GUIDE"),


]