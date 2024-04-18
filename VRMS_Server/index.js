const express = require('express');
const { connectDatabase } = require('./database/database');
const app = express()
//Invoking dotenv(Telling nodejs to use .env)
require('dotenv').config();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
//Connect Database
connectDatabase(process.env.Mongoose_URI);

const shortId = require("shortid")

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
const Birth = require('./model/birthModel');

const deathRegistrationRoute =require('./routes/user/userDeathRoutes');
const birthRegistrationRoute = require('./routes/user/userBirthRoutes')
const adminLoginRoute = require("./routes/admin/authRoutes")
const adminApplicationRoute =require('./routes/admin/adminApplicationsRoutes');
const Admin = require('./model/adminModel');
const sendMail = require('./services/SendMail');

//api for admin login
// app.post('/vrms/admin/login',adminLoginRoute)
app.post("/vrms/admin/login", async(req,res)=>{
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
        //generate token
        const token = jwt.sign({id:adminFound[0]._id},process.env.SECRET_KEY,{expiresIn:'1d'})
        res.status(200).json({
            message:"admin logined successfully.",
            data:adminFound,
            token:token
        })
    }
    else{
        res.status(400).json({
            message:"Invalid Email or Password"
        })
    }
})

// for admin
// app.get("/admin",adminApplicationRoute)
app.get("/admin/death",async(req,res)=>{
    // const adminName = req.user.adminName
    // const deathApplications = await Death.find({_id:{$ne:adminName}})
    const deathApplications = await Death.find();
    if(deathApplications.length !==0){
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
//admin birth
app.get("/admin/birth",async(req,res)=>{
    // const adminName = req.user.adminName
    // const deathApplications = await Death.find({_id:{$ne:adminName}})
    const birthApplications = await Birth.find();
    if(birthApplications.length !==0){
        return res.status(200).json({
            message:"Birth Applications fetched successfully",
            data: birthApplications
        })
    }
    res.status(404).json({
        message : "User Collection is empty",
        data  : []
    })
})

//API for Death Registration
// app.post("/api/deathRegistration",deathRegistrationRoute)
app.post("/api/deathRegistration",async(req, res) => {
    try {
        const { birthCertNo,decedentFirstName,decedentMiddleName,decedentLastName,birthDate,deathDate,gender,causeOfDeath,birthDistrict,birthMunicipality,birthVillage,birthWardno,deathDistrict,deathMunicipality,deathVillage,deathWardno,decedentCitishipIssuedDate,decedentCitishipIssuedDist,decedentCitizenshipNo,deathEducation,decedentFather,decedentMother,grandFather} = req.body
    const {userEmail} = req.body

    if(!birthCertNo,!decedentFirstName,!decedentMiddleName,!decedentLastName,!birthDate,!deathDate,!gender,!causeOfDeath,!birthDistrict,!birthMunicipality,!birthVillage,!birthWardno,!deathDistrict,!deathMunicipality,!deathVillage,!deathWardno,decedentCitishipIssuedDate,!decedentCitishipIssuedDist,!decedentCitizenshipNo,!deathEducation,!decedentFather,!decedentMother,!grandFather,!userEmail){
        res.status(400).json({
            message:"Please fill the form"
        })
    }
    
    // Generate a short ID
    const id = shortId.generate();
    const userApplicationId = parseInt(id, 36);

    await Death.create({
        userApplicationId,
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
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
})

app.get("/api/deathApplication/:userApplicationId",async(req,res)=>{
    const {userApplicationId} = req.params
    try{
        if(!userApplicationId){
            return res.status(400).json({
                message:"Enter your application id"
            })
        }
        const applicationIdFound = await Death.find({userApplicationId:userApplicationId})
        console.log(applicationIdFound)
        
        res.status(200).json({
            message:"Application fetched successfully",
            deathApplication: applicationIdFound
        })
        return
        if(applicationIdFound.length==0){
            return res.status(404).json({
                message:"No application found with the provided ID"
            })
        }
    }catch (error) {
        console.error("Error fetching death application:", error);
    }

})

//API for Birth Registration
app.post("/api/birthRegistration",async(req, res) => {
    const {firstName,lastName,middleName,birthDate,birthTime,birthPlace,babyGender,birthType,babyWeight,birthDistrict,birthMunicipality,birthWardno,birthVillage,grandFather,babyFatherFirstName,babyFatherMiddleName,babyFatherLastName,babyMotherFirstName,babyMotherMiddleName,babyMotherLastName,parentMunicipality,parentDistrict,parentVillage,parentWardno,parentHouseno,parentFatherAge,parentMotherAge,parentFatherCitizenshipno,parentFatherCitizenshipDistrict,parentFatherCitizenshipDate,parentMotherCitizenshipno,parentMotherCitizenshipDistrict,parentMotherCitizenshipDate,fatherEducation,fatherMotherTongue,fatherOccupation,fatherReligion,motherEducation,motherMotherTongue,motherOccupation,motherReligion,userEmail} = req.body
    
    const id = shortId.generate();
    const userApplicationId = parseInt(id, 36);

    try {
        await Birth.create({
            userApplicationId,
            firstName,lastName,middleName,birthDate,birthTime,birthPlace,babyGender,birthType,babyWeight,birthDistrict,birthMunicipality,birthWardno,birthVillage,grandFather,babyFatherFirstName,babyFatherMiddleName,babyFatherLastName,babyMotherFirstName,babyMotherMiddleName,babyMotherLastName,parentMunicipality,parentDistrict,parentVillage,parentWardno,parentHouseno,parentFatherAge,parentMotherAge,parentFatherCitizenshipno,parentFatherCitizenshipDistrict,parentFatherCitizenshipDate,parentMotherCitizenshipno,parentMotherCitizenshipDistrict,parentMotherCitizenshipDate,fatherEducation,fatherMotherTongue,fatherOccupation,fatherReligion,motherEducation,motherMotherTongue,motherOccupation,motherReligion,userEmail
        })
        await sendMail({
            email :userEmail,
            subject : "Your Application for Birth Registration",
            message : "Thank You, we have successfully received your application for Birth Registration. Please visit our office within 7 days"
        })
        res.status(201).json({
            message:"Birth Registered"
        })
    } catch (error) {
        console.log(error);
    }
})


//Listen request at server
app.listen(9000, (req, res) => {
    console.log("Server has started at port 9000")
})