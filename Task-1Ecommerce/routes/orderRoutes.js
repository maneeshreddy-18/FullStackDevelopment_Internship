const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req,res)=>{

    const order = new Order(req.body);

    await order.save();

    res.json({message:"Order stored successfully"});

});

module.exports = router;