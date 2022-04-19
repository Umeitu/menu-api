const express =require("express")
const res = require("express/lib/response")
const morgan =require("morgan")
require("dotenv").config()
const connectDB =require("./config/connectDB")
const foodRoute = require("./routes/foodRoute")


const app =express()

connectDB()
//Middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(foodRoute)

const PORT =process.env.PORT||5002
//Home route
app.get("/", (req, res)=>{
    res.json("Welcome to my Menu API")
})
    app.listen(PORT, ()=>{
console.log("Server is Running")
    
})