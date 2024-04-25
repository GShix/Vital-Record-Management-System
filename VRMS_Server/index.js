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
const Admin = require('./model/adminModel');
const sendMail = require('./services/SendMail');

const deathRegistrationRoute =require('./routes/user/userDeathRoutes');
const birthRegistrationRoute = require('./routes/user/userBirthRoutes')
const adminLoginRoute = require("./routes/admin/authRoutes")
const adminApplicationRoute =require('./routes/admin/adminApplicationsRoutes');

app.post("/api/deathApplication",deathRegistrationRoute)

//api for admin login
// app.post('/vrms/admin/login',adminLoginRoute)
app.post("/api/vrms/admin/login", async(req,res)=>{
    try {
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
        const token = jwt.sign({id:adminFound[0]._id},process.env.SECRET_KEY,{expiresIn:'5m'})
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
    } catch (error) {
        console.log(error);
    }
})

// for admin
// app.get("/admin",adminApplicationRoute)
app.get("/api/admin/death",async(req,res)=>{
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
app.get("/api/admin/birth",async(req,res)=>{
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
//API for application approbation
app.post("/api/admin/birthVerification/:id",async(req,res)=>{
    const {id} = req.params
    const applicationFound = await Birth.findById(id)
    if(!applicationFound ){
        return res.status(400).json({
            message:"No application with this id"
        })
    }
    if(!applicationFound.applicationStatus || !['underreview','rejected','verified'].includes(applicationFound.applicationStatus.toLowerCase())){
        return res.status(400).json({
            message:"Invalid Application Status"
        })
    }
    const updateStatus = await Birth.findByIdAndUpdate(id,{
        applicationStatus:"verified"
    },{new:true})
    res.status(200).json({
        message:"Application Verified Successfully",
        data:updateStatus
    })

})

app.post("/api/admin/deathVerification/:id",async(req,res)=>{
    const {id} = req.params
    const applicationFound = await Death.findById(id)
    if(!applicationFound ){
        return res.status(400).json({
            message:"No application with this id"
        })
    }
    if(!applicationFound.applicationStatus || !['underreview','rejected','verified'].includes(applicationFound.applicationStatus.toLowerCase())){
        return res.status(400).json({
            message:"Invalid Application Status"
        })
    }
    const updateStatus = await Death.findByIdAndUpdate(id,{
        applicationStatus:"verified"
    },{new:true})
    res.status(200).json({
        message:"Application Verified Successfully",
        data:updateStatus
    })

})

//API for delete form
app.post("/api/admin/birthRejection/:id",async(req,res)=>{
    const {id} = req.params;
    if(!id || id==0){
        return res.status(400).json({
            message:"Please enter a valid id"
        })
    }
    const applicationFound = await Birth.findById(id);
    if(!applicationFound){
        return res.status(400).json({
            message:"No application with this id"
        })
    }
    const rejectApplication = await Birth.findByIdAndDelete(id);
    res.status(200).json({
        message:`The Birth Application with id: ${id} is rejected successfully`,
    })
})

app.post("/api/admin/deathRejection/:id",async(req,res)=>{
    const {id} = req.params;
    if(!id || id==0){
        return res.status(400).json({
            message:"Please enter a valid id"
        })
    }
    const applicationFound = await Death.findById(id);
    if(!applicationFound){
        return res.status(400).json({
            message:"No application with this id"
        })
    }
    const rejectApplication = await Death.findByIdAndDelete(id);
    res.status(200).json({
        message:`The Death Application with id: ${id} is rejected successfully`
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
        message : `Thank You, we have successfully received your application for Death Registration. Here is your Application ID ${userApplicationId}. You can download your certificate once your application is verified.
        Please be patience till your application is approved. `
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
        if(!userApplicationId || userApplicationId ==0){
            return res.status(400).json({
                message:"Enter your application id"
            })
        }
        const applicationIdFound = await Death.find({userApplicationId:userApplicationId})
        // console.log(applicationIdFound)
        if(applicationIdFound.length!==0){
            return res.status(200).json({
                message:"Death Application fetched successfully",
                deathApplication: applicationIdFound
            })
        }
        if(applicationIdFound.length==0){
            return res.status(404).json({
                message:"No application found with the this ID"
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
            message : `Thank You, we have successfully received your application for Birth Registration. Here is your Application ID ${userApplicationId}. You can download your certificate once your application is verified.
            Please be patience till your application is approved. `
        })
        res.status(201).json({
            message:"Birth Registered"
        })
    } catch (error) {
        console.log(error);
    }
})

app.get("/api/birthApplication/:userApplicationId",async(req,res)=>{
    const {userApplicationId} = req.params
    try{
        if(!userApplicationId || userApplicationId ==0){
            return res.status(400).json({
                message:"Enter your application id"
            })
        }
        const applicationIdFound = await Birth.find({userApplicationId:userApplicationId})
        // console.log(applicationIdFound)
        if(applicationIdFound.length!==0){
            return res.status(200).json({
                message:"Birth Application fetched successfully",
                birthApplication: applicationIdFound
            })
        }
        if(applicationIdFound.length==0){
            return res.status(404).json({
                message:"No application found with the this ID"
            })
        }
    }catch (error) {
        console.error("Error fetching death application:", error);
    }

})

//Listen request at server
app.listen(9000, (req, res) => {
    console.log("Server has started at port 9000")
})