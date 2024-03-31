const Birth = require("../../model/birthModel")
const Death = require("../../model/deathModel")
const sendMail = require('../../services/SendMail');

exports.submitBirthApplication =async(req, res) => {
    const {firstName,lastName,middleName,birthDate,birthTime,birthPlace,babyGender,birthType,babyWeight,birthDistrict,birthMunicipality,birthWardno,birthVillage,grandFather,babyFatherFirstName,babyFatherMiddleName,babyFatherLastName,babyMotherFirstName,babyMotherMiddleName,babyMotherLastName,parentMunicipality,parentDistrict,parentVillage,parentWardno,parentHouseno,parentFatherAge,parentMotherAge,parentFatherCitizenshipno,parentFatherCitizenshipDistrict,parentFatherCitizenshipDate,parentMotherCitizenshipno,parentMotherCitizenshipDistrict,parentMotherCitizenshipDate,fatherEducation,fatherMotherTongue,fatherOccupation,fatherReligion,motherEducation,motherMotherTongue,motherOccupation,motherReligion,userEmail} = req.body
    
    await Birth.create({
        firstName,lastName,middleName,birthDate,birthTime,birthPlace,babyGender,birthType,babyWeight,birthDistrict,birthMunicipality,birthWardno,birthVillage,grandFather,babyFatherFirstName,babyFatherMiddleName,babyFatherLastName,babyMotherFirstName,babyMotherMiddleName,babyMotherLastName,parentMunicipality,parentDistrict,parentVillage,parentWardno,parentHouseno,parentFatherAge,parentMotherAge,parentFatherCitizenshipno,parentFatherCitizenshipDistrict,parentFatherCitizenshipDate,parentMotherCitizenshipno,parentMotherCitizenshipDistrict,parentMotherCitizenshipDate,fatherEducation,fatherMotherTongue,fatherOccupation,fatherReligion,motherEducation,motherMotherTongue,motherOccupation,motherReligion,userEmail
    })
    await sendMail({
        email :userEmail,
        subject : "Your Application for Birth Registration",
        message : "Thank You, we have successfully received your application for Birth Registration. Please visit our office within 7 days"
    })
    res.status(201).json({
        message:"Birth Registered"
    })
}

exports.getMyBirthApplication =async()=>{
    const {userApplicationId} = req.body
    if(!userApplicationId){
        return res.status(400).json({
            message:"Enter your application id"
        })
    }
    const applicationIdFound = await Birth.findById(userApplicationId)
    if(!applicationIdFound){
        return res.status(404).json({
            message:"Your application id doesnot match"
        })
    }
    res.status(200).json({
        message:"Application fetched successfully",
        data: applicationIdFound
    })

}


//death
exports.submitDeathApplication = async(req, res) => {
    const { birthCertNo,decedentFirstName,decedentMiddleName,decedentLastName,birthDate,deathDate,gender,causeOfDeath,birthDistrict,birthMunicipality,birthVillage,birthWardno,deathDistrict,deathMunicipality,deathVillage,deathWardno,decedentCitishipIssuedDate,decedentCitishipIssuedDist,decedentCitizenshipNo,deathEducation,decedentFather,decedentMother,grandFather} = req.body
    const {userEmail} = req.body

    if(!birthCertNo,!decedentFirstName,!decedentMiddleName,!decedentLastName,!birthDate,!deathDate,!gender,!causeOfDeath,!birthDistrict,!birthMunicipality,!birthVillage,!birthWardno,!deathDistrict,!deathMunicipality,!deathVillage,!deathWardno,decedentCitishipIssuedDate,!decedentCitishipIssuedDist,!decedentCitizenshipNo,!deathEducation,!decedentFather,!decedentMother,!grandFather,!userEmail){
        res.status(400).json({
            message:"Please fill the form"
        })
    }
    await Death.create({
        birthCertNo,decedentFirstName,decedentMiddleName,decedentLastName,birthDate,deathDate,gender,causeOfDeath,birthDistrict,birthMunicipality,birthVillage,birthWardno,deathDistrict,deathMunicipality,deathVillage,deathWardno,decedentCitishipIssuedDate,decedentCitishipIssuedDist,decedentCitizenshipNo,deathEducation,decedentFather,decedentMother,grandFather,userEmail
    })
    await sendMail({
        email :userEmail,
        subject : "Your Application for Death Registration",
        message : "Thank You, we have successfully received your application for Death Registration. Please visit our office within 7 days"
    })
    res.status(201).json({
        message:"Death Registered"
    })
}
exports.getMyDeathApplication =async(req,res)=>{
    const {userApplicationId} = req.body
    if(!userApplicationId){
        return res.status(400).json({
            message:"Enter your application id"
        })
    }
    const applicationIdFound = await Death.findById(userApplicationId)
    if(!applicationIdFound){
        return res.status(404).json({
            message:"Your application id doesnot match"
        })
    }
    res.status(200).json({
        message:"Application fetched successfully",
        data: applicationIdFound
    })

}