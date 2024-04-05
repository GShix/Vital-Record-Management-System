const express = require('express');
const { connectDatabase } = require('./database/database');
const app = express()
const bcrypt = require("bcryptjs")
//Invoking dotenv(Telling nodejs to use .env)
require('dotenv').config();

//Connect Database
connectDatabase(process.env.Mongoose_URI);

//Telling node to understand json 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//cors
const cors = require("cors")
app.use(cors({
    // origin:"https://vrms-babaimuni.vercel.app",
    origin:"*",
    methods:['GET', 'PUT', 'POST']
}))

//Home API
app.get('/', (req, res) => {
    res.status(200).json({
        message: "I am live"
    })
})

//api router
const Death = require('./model/deathModel');
const sendMail = require('./services/SendMail');
const Admin = require('./model/adminModel');

const deathRegistrationRoute =require('./routes/user/userDeathRoutes');
const birthRegistrationRoute = require('./routes/user/userBirthRoutes')
const adminLoginRoute = require('./routes/admin/authRoutes')
const adminApplicationRoute =require('./routes/admin/adminApplicationsRoutes')

//api for admin login
app.post('/vrms/admin',adminLoginRoute)

// for admin
app.get("/admin",adminApplicationRoute)
app.get("/api/admin/deathApplications",async(req,res)=>{
    const adminName = req.user.adminName
    const deathApplications = await Death.find({_id:{$ne:adminName}})
    if(deathApplications.length>1){
        return res.status(200).json({
            message:"Death Applications fetched successfully",
            data: deathApplications
        })
    }
    res.status(404).json({
        message : "User Collection is empty",
        data  : []
    })
})

//API for Death Registration
app.post("/api/deathRegistration",deathRegistrationRoute)

// app.get("/api/deathApplication/:userApplicationId",async(req,res)=>{
//     const {userApplicationId} = req.params
//     try{
//         if(!userApplicationId){
//             return res.status(400).json({
//                 message:"Enter your application id"
//             })
//         }
//         const applicationIdFound = await Death.find({userApplicationId:userApplicationId})
//         console.log(applicationIdFound)
        
//         res.status(200).json({
//             message:"Application fetched successfully",
//             deathApplication: applicationIdFound
//         })
//         return
//         if(applicationIdFound.length==0){
//             return res.status(404).json({
//                 message:"No application found with the provided ID"
//             })
//         }
//     }catch (error) {
//         console.error("Error fetching death application:", error);
//     }

// })

//API for Birth Registration
// app.post('/api/birthRegistration',birthApplicationRoute)


//Listen request at server
app.listen(9000, (req, res) => {
    console.log("Server has started at port 9000")
})