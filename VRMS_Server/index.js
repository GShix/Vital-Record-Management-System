const express = require('express');
const { connectDatabase } = require('./database/database');
const app = express()

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
    origin:"http://localhost:5173",
    methods:['GET', 'PUT', 'POST']
}))

//Home API
app.get('/', (req, res) => {
    res.status(200).json({
        message: "I am live"
    })
})

//api
const deathApplicationRoute = require('./routes/user/userDeathRoutes')
const birthApplicationRoute = require('./routes/user/userBirthRoutes')
const adminDeathRoute = require('./routes/admin/deathRoutes')
const adminBirthRoute = require('./routes/admin/birthRoutes')
const adminLoginRoute = require("./routes/admin/authRoutes");
const Death = require('./model/deathModel');
const sendMail = require('./services/SendMail');

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
    const {userEmail} = req.body

    if(!birthCertNo,!decedentFirstName,!decedentMiddleName,!decedentLastName,!birthDate,!deathDate,!gender,!causeOfDeath,!birthDistrict,!birthMunicipality,!birthVillage,!birthWardno,!deathDistrict,!deathMunicipality,!deathVillage,!deathWardno,decedentCitishipIssuedDate,!decedentCitishipIssuedDist,!decedentCitizenshipNo,!deathEducation,!decedentFather,!decedentMother,!grandFather,!userEmail){
        res.status(400).json({
            message:"Please fill the form"
        })
    }
    await Death.create({
        birthCertNo,decedentFirstName,decedentMiddleName,decedentLastName,birthDate,deathDate,gender,causeOfDeath,birthDistrict,birthMunicipality,birthVillage,birthWardno,deathDistrict,deathMunicipality,deathVillage,deathWardno,decedentCitishipIssuedDate,decedentCitishipIssuedDist,decedentCitizenshipNo,deathEducation,decedentFather,decedentMother,grandFather,userEmail
    })
    await sendMail({
        email :userEmail,
        subject : "Your Application for Death Registration",
        message : "Thank You, we have successfully received your application for Death Registration. Please visit our office within 7 days"
    })
    res.status(201).json({
        message:"Death Registered"
    })
})

//API for Birth Registration
app.post('/api/birthRegistration',birthApplicationRoute)


//Listen request at server
app.listen(9000, (req, res) => {
    console.log("Server has started at port 9000")
})