const mongoose = require("mongoose")
const Schema = mongoose.Schema

const birthSchema = new Schema({
    firstName:{type:String},
    lastName:{type:String},
    middleName:{type:String},
    birthDate:{type:Date},
    birthTime:{type:Date},
    birthPlace:{type:String},
    babyGender:{type:String},
    birthType:{type:String},
    babyWeight:{type:Number},
    birthDistrict:{type:String},
    birthMunicipality:{type:String},
    birthWardno:{type:Number},
    birthVillage:{type:String},
    grandFather:{type:String},
    babyFatherFirstName:{type:String},
    babyFatherMiddleName:{type:String},
    babyFatherLastName:{type:String},
    babyMotherFirstName:{type:String},
    babyMotherMiddleName:{type:String},
    babyMotherLastName:{type:String},
    parentMunicipality:{type:String},
    parentDistrict:{type:String},
    parentVillage:{type:String},
    parentWardno:{type:Number},
    parentHouseno:{type:Number},
    parentFatherAge:{type:Number},
    parentMotherAge:{type:Number},
    parentFatherCitizenshipno:{type:Number},
    parentFatherCitizenshipDistrict:{type:String},
    parentFatherCitizenshipDate:{type:Date},
    parentMotherCitizenshipno:{type:Number},
    parentMotherCitizenshipDistrict:{type:String},
    parentMotherCitizenshipDate:{type:Date},
    fatherEducation:{type:String},
    fatherMotherTongue:{type:String},
    fatherOccupation:{type:String},
    fatherReligion:{type:String},
    motherEducation:{type:String},
    motherMotherTongue:{type:String},
    motherOccupation:{type:String},
    motherReligion:{type:String},
    userEmail:{type:String,lowercase:true},
    applicationStatus:{
        type:String,
        enum:["underVerification","rejecteds","verified"],
        default:"underVerification"
    },
    userOtp:{
        type:Number
    }
})

const Birth = mongoose.model("Birth",birthSchema)
module.exports = Birth
