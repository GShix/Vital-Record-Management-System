const express = require('express');
const { connectDatabase } = require('./database/database');
const Death = require('./model/deathModel');
const app = express()

const cors = require('cors');
const sendMail = require('./services/SendMail');
app.use(cors({
    origin : 'https://vrms-babaimuni.vercel.app/',
    methods:"GET,POST"
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

//api
const deathApplicationRoute = router('./routes/user/userDeathRoutes')
const birthApplicationRoute = router('./routes/user/userBirthRoutes')
const adminDeathRoute = router('./routes/admin/deathRoutes')
const adminBirthRoute = router('./routes/admin/birthRoutes')
//API for Death Registration
app.post('/api/deathRegistration',deathApplicationRoute)

//API for Marriage Registration


//Listen request at server
app.listen(8000, (req, res) => {
    console.log("Server has started at port 8000")
})