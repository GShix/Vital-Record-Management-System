import Birth from "../../model/birthModel.js"
import Death from "../../model/deathModel.js"
import sendMail from '../../services/SendMail.js';
import shortId from "shortid"
import multer from "multer";

const storage = multer.diskStorage({
    destination:(res,file,cb)=>{
        return cb(null,"./public/images")
    },
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}_${file.originalName}`)
    }
});
const upload = multer({storage})

export const submitBirthApplication =(upload.single('babyPhoto'), async(req, res) => {
    try {
        const {firstName,lastName,middleName,birthDate,birthTime,birthPlace,babyGender,birthType,babyWeight,birthDistrict,birthMunicipality,birthWardno,birthVillage,grandFather,babyFatherFirstName,babyFatherMiddleName,babyFatherLastName,babyMotherFirstName,babyMotherMiddleName,babyMotherLastName,parentMunicipality,parentDistrict,parentVillage,parentWardno,parentHouseno,parentFatherAge,parentMotherAge,parentFatherCitizenshipno,parentFatherCitizenshipDistrict,parentFatherCitizenshipDate,parentMotherCitizenshipno,parentMotherCitizenshipDistrict,parentMotherCitizenshipDate,fatherEducation,fatherMotherTongue,fatherOccupation,fatherReligion,motherEducation,motherMotherTongue,motherOccupation,motherReligion,userEmail,babyPhoto} = req.body
    
    const id = shortId.generate();
    const userApplicationId = parseInt(id, 36);
    const data=    await Birth.create({
            userApplicationId,
            firstName,lastName,middleName,birthDate,birthTime,birthPlace,babyGender,birthType,babyWeight,birthDistrict,birthMunicipality,birthWardno,birthVillage,grandFather,babyFatherFirstName,babyFatherMiddleName,babyFatherLastName,babyMotherFirstName,babyMotherMiddleName,babyMotherLastName,parentMunicipality,parentDistrict,parentVillage,parentWardno,parentHouseno,parentFatherAge,parentMotherAge,parentFatherCitizenshipno,parentFatherCitizenshipDistrict,parentFatherCitizenshipDate,parentMotherCitizenshipno,parentMotherCitizenshipDistrict,parentMotherCitizenshipDate,fatherEducation,fatherMotherTongue,fatherOccupation,fatherReligion,motherEducation,motherMotherTongue,motherOccupation,motherReligion,userEmail,babyPhoto
        })
        await sendMail({
            email :userEmail,
            subject : "Your Application for Birth Registration",
            message : `Thank You, we have successfully received your application for Birth Registration. Here is your Application ID ${userApplicationId}. You can download your certificate once your application is verified.
            Please be patience till your application is approved. `
        })
        res.status(201).json({
            message:"Birth Registered",
            data:data
        })
    } catch (error) {
        console.log(error);
    }
})

export const getMyBirthApplication =async(req,res)=>{
    const {userApplicationId} = req.params
    try{
        if(!userApplicationId || userApplicationId ==0){
            return res.status(400).json({
                message:"Enter your application id"
            })
        }
        const applicationIdFound = await Birth.find({userApplicationId:userApplicationId})
        // console.log(applicationIdFound)
        if(applicationIdFound.length!==0){
            return res.status(200).json({
                message:"Birth Application fetched successfully",
                birthApplication: applicationIdFound
            })
        }
        if(applicationIdFound.length==0){
            return res.status(404).json({
                message:"No application found with the this ID"
            })
        }
    }catch (error) {
        console.error("Error fetching death application:", error);
    }

}


//death
export const submitDeathApplication = async(req, res) => {
    try {
        const { birthCertNo,decedentFirstName,decedentMiddleName,decedentLastName,birthDate,deathDate,gender,causeOfDeath,birthDistrict,birthMunicipality,birthVillage,birthWardno,deathDistrict,deathMunicipality,deathVillage,deathWardno,decedentCitishipIssuedDate,decedentCitishipIssuedDist,decedentCitizenshipNo,deathEducation,decedentFather,decedentMother,grandFather} = req.body
        const {userEmail} = req.body
        
        if(!birthCertNo,!decedentFirstName,!decedentMiddleName,!decedentLastName,!birthDate,!deathDate,!gender,!causeOfDeath,!birthDistrict,!birthMunicipality,!birthVillage,!birthWardno,!deathDistrict,!deathMunicipality,!deathVillage,!deathWardno,decedentCitishipIssuedDate,!decedentCitishipIssuedDist,!decedentCitizenshipNo,!deathEducation,!decedentFather,!decedentMother,!grandFather,!userEmail){
            res.status(400).json({
                message:"Please fill the form"
            })
        }
        
    // Generate a short ID
    const id = shortId.generate();
    const userApplicationId = parseInt(id, 36);
    
    await Death.create({
        userApplicationId,
        birthCertNo,decedentFirstName,decedentMiddleName,decedentLastName,birthDate,deathDate,gender,causeOfDeath,birthDistrict,birthMunicipality,birthVillage,birthWardno,deathDistrict,deathMunicipality,deathVillage,deathWardno,decedentCitishipIssuedDate,decedentCitishipIssuedDist,decedentCitizenshipNo,deathEducation,decedentFather,decedentMother,grandFather,userEmail
    })
    await sendMail({
        email :userEmail,
        subject : "Your Application for Death Registration",
        message : `Thank You, we have successfully received your application for Death Registration. Here is your Application ID ${userApplicationId}. You can download your certificate once your application is verified.
        Please be patience till your application is approved. `
    })
    res.status(201).json({
        message:"Death Registered"
    })
} catch (error) {
    console.log(error);
    res.status(500).json({
        message: "Internal Server Error"
    });
}
}
export const getMyDeathApplication =async(req,res)=>{
    const {userApplicationId} = req.params
    try{
        if(!userApplicationId || userApplicationId ==0){
            return res.status(400).json({
                message:"Enter your application id"
            })
        }
        const applicationIdFound = await Death.find({userApplicationId:userApplicationId})
        // console.log(applicationIdFound)
        if(applicationIdFound.length!==0){
            return res.status(200).json({
                message:"Death Application fetched successfully",
                deathApplication: applicationIdFound
            })
        }
        if(applicationIdFound.length==0){
            return res.status(404).json({
                message:"No application found with the this ID"
            })
        }
    }catch (error) {
        console.error("Error fetching death application:", error);
    }

}