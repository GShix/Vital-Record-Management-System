import mongoose from 'mongoose'
const Schema = mongoose.Schema

const adminSchema =new Schema({
    adminEmail:{type:String,require:true,lowercase:true, unique:true},
    adminName:{type:String,require:true,unique: true},
    adminPassword:{type:String,require:true},
    confirmPassword:{type:String,require:true},
})
const Admin = mongoose.model("Admin",adminSchema)
export default Admin