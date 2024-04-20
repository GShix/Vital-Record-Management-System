const mongoose = require("mongoose")
const Schema = mongoose.Schema

const birthSchema = new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    middleName:{type:String,required:true},
    birthDate:
    {
        type:Date
    },
    birthTime:{type:String,required:true},
    birthPlace:{type:String,required:true},
    babyGender:{type:String,required:true},
    birthType:{type:String,required:true},
    babyWeight:{type:Number, required:true},
    birthDistrict:{type:String,required:true},
    birthMunicipality:{type:String,required:true},
    birthWardno:{type:Number, required:true},
    birthVillage:{type:String,required:true},
    grandFather:{type:String,required:true},
    babyFatherFirstName:{type:String,required:true},
    babyFatherMiddleName:{type:String,required:true},
    babyFatherLastName:{type:String,required:true},
    babyMotherFirstName:{type:String,required:true},
    babyMotherMiddleName:{type:String,required:true},
    babyMotherLastName:{type:String,required:true},
    parentMunicipality:{type:String,required:true},
    parentDistrict:{type:String,required:true},
    parentVillage:{type:String,required:true},
    parentWardno:{type:Number, required:true},
    parentHouseno:{type:Number, required:true},
    parentFatherAge:{type:Number, required:true},
    parentMotherAge:{type:Number, required:true},
    parentFatherCitizenshipno:{type:Number, required:true},
    parentFatherCitizenshipDistrict:{type:String,required:true},
    parentFatherCitizenshipDate:{type:Date},
    parentMotherCitizenshipno:{type:Number, required:true},
    parentMotherCitizenshipDistrict:{type:String,required:true},
    parentMotherCitizenshipDate:{type:Date},
    fatherEducation:{type:String,required:true},
    fatherMotherTongue:{type:String,required:true},
    fatherOccupation:{type:String,required:true},
    fatherReligion:{type:String,required:true},
    motherEducation:{type:String,required:true},
    motherMotherTongue:{type:String,required:true},
    motherOccupation:{type:String,required:true},
    motherReligion:{type:String,required:true},
    userEmail:{type:String,required:true,lowercase:true},
    applicationStatus:{
        type:String,
        enum:["underreview","rejected","verified"],
        default:"underreview"
    },
    userApplicationId:{
        type:Number
    }
})

const Birth = mongoose.model("Birth",birthSchema)
module.exports = Birth
