const mongoose = require("mongoose")
const Schema = mongoose.Schema
const birthSchema = new Schema({
    birthCertNo: { type: Number },
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
    userEmail:{type:String}
})
const Death = mongoose.model("Death", birthSchema)
module.exports = Death