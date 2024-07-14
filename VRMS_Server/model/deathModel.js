import mongoose from 'mongoose'
const Schema = mongoose.Schema

const deathSchema = new Schema({
    birthCertNo: { type: Number,
        required:true },
    decedentFirstName: { type: String,
        required:true },
    decedentMiddleName: { type: String,
        required:true },
    decedentLastName: { type: String,
        required:true },
    birthDate: { type: Date,
        required:true },
    deathDate: { type: Date,
        required:true },
    gender:{type:String},
    causeOfDeath: { type: String,
        required:true },
    birthDistrict: { type: String,
        required:true },
    birthMunicipality: { type: String,
        required:true },
    birthVillage: { type: String,
        required:true },
    birthWardno: { type: Number },
    deathDistrict: { type: String,
        required:true },
    deathMunicipality: { type: String,
        required:true },
    deathVillage: { type: String },
    deathWardno: { type: Number,
        required:true },
    decedentCitishipIssuedDate: { type: Date,
        required:true },
    decedentCitishipIssuedDist: { type: String,
        required:true },
    decedentCitizenshipNo: { type: Number,
        required:true },
    deathEducation: { type: String,
        required:true },
    decedentFather: { type: String,
        required:true },
    decedentMother: { type: String,
        required:true },
    grandFather: { type: String,
        required:true },
    userEmail:{type:String,lowercase:true,
        required:true},
    applicationStatus:{
        type:String,
        enum:["underreview","rejected","verified"],
        default:"underreview"
    },
    userApplicationId:{
        type:Number
    },
    otp : {
        type : Number,
        select : false
    },
})
const Death = mongoose.model("Death", deathSchema)
export default Death;