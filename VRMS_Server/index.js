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
    origin:"",
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

//api for admin login
// app.post('/vrms/admin',adminLoginRoute)

app.post("/vrms/admin/login",async(req,res)=>{
        const {adminName,adminPassword}=req.body
        if(!adminName ||!adminPassword){
            return res.status(400).json({
                message:"Enter Email & Password."
            })
        }
        //else
        const adminFound = await Admin.find({adminName:adminName})
        if(adminFound.length==0){
            return res.status(400).json({
                message:"You have not permission to Login"
            })
        }
        req.user = adminFound
        //password match
        const matchPassword = bcrypt.compareSync(adminPassword,adminFound[0].adminPassword);
        if(matchPassword){
            res.status(200).json({
                message:"admin logined successfully."
            })
        }
        else{
            res.status(400).json({
                message:"Invalid Email or Password"
            })
        }
})


//API for Death Registration
app.post("/api/deathRegistration",async(req, res) => {
    const { birthCertNo,decedentFirstName,decedentMiddleName,decedentLastName,birthDate,deathDate,gender,causeOfDeath,birthDistrict,birthMunicipality,birthVillage,birthWardno,deathDistrict,deathMunicipality,deathVillage,deathWardno,decedentCitishipIssuedDate,decedentCitishipIssuedDist,decedentCitizenshipNo,deathEducation,decedentFather,decedentMother,grandFather} = req.body
    const {userEmail,userApplicationId} = req.body

    if(!birthCertNo,!decedentFirstName,!decedentMiddleName,!decedentLastName,!birthDate,!deathDate,!gender,!causeOfDeath,!birthDistrict,!birthMunicipality,!birthVillage,!birthWardno,!deathDistrict,!deathMunicipality,!deathVillage,!deathWardno,decedentCitishipIssuedDate,!decedentCitishipIssuedDist,!decedentCitizenshipNo,!deathEducation,!decedentFather,!decedentMother,!grandFather,!userEmail){
        res.status(400).json({
            message:"Please fill the form"
        })
    }
    await Death.create({
        birthCertNo,decedentFirstName,decedentMiddleName,decedentLastName,birthDate,deathDate,gender,causeOfDeath,birthDistrict,birthMunicipality,birthVillage,birthWardno,deathDistrict,deathMunicipality,deathVillage,deathWardno,decedentCitishipIssuedDate,decedentCitishipIssuedDist,decedentCitizenshipNo,deathEducation,decedentFather,decedentMother,grandFather,userEmail,userApplicationId
    })
    await sendMail({
        email :userEmail,
        subject : "Your Application for Death Registration",
        message : `Thank you for sumbitting application.
        We have successfully received your application for Death Registration. 
        Please be patienced as your application takes a 2-3 days to be reviewed.
        Your Application ID: ${userApplicationId}`
    })
    res.status(201).json({
        message:"Death Registered"
    })
})
// app.get("/api/deathApplication",deathApplicationRoute)

app.get("/api/deathApplication/:userApplicationId",async(req,res)=>{
    const {userApplicationId} = req.params
    try{
        if(!userApplicationId){
            return res.status(400).json({
                message:"Enter your application id"
            })
        }
        const applicationIdFound = await Death.find({userApplicationId})
        if(applicationIdFound.length==0){
            return res.status(404).json({
                message:"No application found with the provided ID"
            })
        }
        res.status(200).json({
            message:"Application fetched successfully",
            deathApplication: applicationIdFound
        })
    }catch (error) {
        console.error("Error fetching death application:", error);
    }

})

//
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
//API for Birth Registration
// app.post('/api/birthRegistration',birthApplicationRoute)


//Listen request at server
app.listen(9000, (req, res) => {
    console.log("Server has started at port 9000")
})