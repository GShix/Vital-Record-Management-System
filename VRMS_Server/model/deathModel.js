const mongoose = require("mongoose")
const Schema = mongoose.Schema
const deathSchema = new Schema({
    birthCertNo: { type: Number,required:[true,"Please enter Birth Certificate Number"] },
    decedentFirstName: { type: String },
    decedentMiddleName: { type: String },
    decedentLastName: { type: String },
    birthDate: { type: Date },
    deathDate: { type: Date },
    gender:{type:String},
    causeOfDeath: { type: String },
    birthDistrict: { type: String },
    birthMunicipality: { type: String },
    birthVillage: { type: String },
    birthWardno: { type: Number },
    deathDistrict: { type: String },
    deathMunicipality: { type: String },
    deathVillage: { type: String },
    deathWardno: { type: Number },
    decedentCitishipIssuedDate: { type: Date },
    decedentCitishipIssuedDist: { type: String },
    decedentCitizenshipNo: { type: Number },
    deathEducation: { type: String },
    decedentFather: { type: String },
    decedentMother: { type: String },
    grandFather: { type: String },
    userEmail:{type:String,lowercase:true},
    applicationStatus:{
        type:String,
        enum:["underVerification"],
        default:"underVerification"
    },
    userOtp:{
        type:Number
    }
})
const Death = mongoose.model("Death", deathSchema)
module.exports = Death