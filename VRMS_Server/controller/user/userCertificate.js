const Birth = require("../../model/birthModel")
const Death = require("../../model/deathModel")

exports.getDeathCertificate =async(req,res)=>{
    const userOtp = req.params.otp
    if(!userOtp){
        return res.status(404).json({
            message:"Enter your OTP"
        })
    }
    const userFound = await Death.find({otp:userOtp})
    if(userFound.length==0){
        return res.status(404).json({
            message:"No application found with this otp"
        })
    }
}

exports.getBirthCertificate =async(req,res)=>{
    const userOtp = req.params.otp
    if(!userOtp){
        return res.status(404).json({
            message:"Enter your OTP"
        })
    }
    const userFound = await Birth.find({otp:userOtp})
    if(userFound.length==0){
        return res.status(404).json({
            message:"No application found with this otp"
        })
    }
}