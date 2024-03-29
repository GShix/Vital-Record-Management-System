const mongoose = require('mongoose');
const { adminSeeder } = require('../adminSeeder');

//Invoking dotenv(Telling nodejs to use .env)
// require('dotenv').config(); 
exports.connectDatabase = async(URI)=>{
    await mongoose.connect(URI)
    console.log("Database is connected successfully");
    adminSeeder();
}