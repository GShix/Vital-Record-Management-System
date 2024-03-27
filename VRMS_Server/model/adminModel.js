const mongoose = require("mongoose")
const Schema = mongoose.Schema

const adminSchema =new Schema({
    adminEmail:{type:String,lowercase:true},
    adminName:{type:String},
    adminPassword:{type:String},
    confirmPassword:{type:String},
})
const Admin = mongoose.model("Admin",adminSchema)
module.exports = Admin