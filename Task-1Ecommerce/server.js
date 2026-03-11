const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(() => {
    console.log("MongoDB Connected");
})
.catch(err => {
    console.log(err);
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req,res)=>{
    res.send("Ecommerce Server Running");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});