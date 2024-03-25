const express = require('express');
const { connectDatabase } = require('./database/database');
const Death = require('./model/deathModel');
const app = express()

const cors = require('cors')
app.use(cors({
    origin : '*'
}))
//Invoking dotenv(Telling nodejs to use .env)
require('dotenv').config();

//Connect Database
connectDatabase(process.env.Mongoose_URI);

//Telling node to understand json 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Home API
app.get('/', (req, res) => {
    res.status(200).json({
        message: "I am live"
    })
})

//API for Death Registration
app.post('/api/deathRegistration', async(req, res) => {
    const { birthCertNo,decedentFirstName,decedentMiddleName,decedentLastName,birthDate,deathDate,gender,causeOfDeath,birthDistrict,birthMunicipality,birthVillage,birthWardno,deathDistrict,deathMunicipality,deathVillage,deathWardno,decedentCitishipIssuedDate,decedentCitishipIssuedDist,decedentCitizenshipNo,deathEducation,decedentFather,decedentMother,grandFather} = req.body

    await Death.create({
        birthCertNo,decedentFirstName,decedentMiddleName,decedentLastName,birthDate,deathDate,gender,causeOfDeath,birthDistrict,birthMunicipality,birthVillage,birthWardno,deathDistrict,deathMunicipality,deathVillage,deathWardno,decedentCitishipIssuedDate,decedentCitishipIssuedDist,decedentCitizenshipNo,deathEducation,decedentFather,decedentMother,grandFather
    })
    res.status(200).json({
        message:"Death Registered"
    })
})

//GET API for Migration

//API for Marriage Registration


//Listen request at server
app.listen(8000, (req, res) => {
    console.log("Server has started at port 5000")
})