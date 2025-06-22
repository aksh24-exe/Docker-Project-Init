const { Router } = require("express");
const {userModel } = require("../db");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "abcd123";

userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    // TODO: Put inside a try catch block
    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName,
    })
    
    res.json({
        message: "signup endpoint"
    })
})

userRouter.post("/signin", async function(req, res) {
    const {email, password} = req.body;

    const user=  await userModel.findOne({
            email:email,
            password:password
    });



    res.json({
        message: "signup endpoint"
    })
})

userRouter.get("/purchases", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}