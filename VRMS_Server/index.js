const express = require('express');
const { connectDatabase } = require('./database/database');
const Death = require('./model/deathModel');
const app = express()

//Invoking dotenv(Telling nodejs to use .env)
require('dotenv').config();

//Connect Database
connectDatabase(process.env.Mongoose_URI);

//Telling node to understand json 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors({
    // origin : 'https://vrms-babaimuni.vercel.app/',
    origin : 'http://localhost:5173/',
    methods:"GET,POST"
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
const adminLoginRoute = require("./routes/admin/authRoutes")
//api for admin login
app.post("/vrms-server/admin")
//API for Death Registration
app.post('/api/deathRegistration',deathApplicationRoute)

//API for Birth Registration
app.post('api/birthRegistration',birthApplicationRoute)


//Listen request at server
app.listen(8000, (req, res) => {
    console.log("Server has started at port 8000")
})