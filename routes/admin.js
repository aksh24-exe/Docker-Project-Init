const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const JWT_USER_PASSWORD = "abcd12345";


adminRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    // TODO: Put inside a try catch block
    await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName,
    })
    
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})
//api/v1/cource
adminRouter.post("/", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.put("/", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.get("//bulk", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}