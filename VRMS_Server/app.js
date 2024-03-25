const express = require("express")
const app = express();

//Tell to Express to change req to JSON:
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

//Invoking dotenv(Telling nodejs to use .env)
require('dotenv').config(); 
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"This is Home "
    })
})
// const PORT = process.env.PORT;
app.listen(8000,(req,res)=>{
    console.log("Node is started at 8000 port")
})