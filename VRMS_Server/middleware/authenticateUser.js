const Death = require("../model/deathModel");
const sendMail = require("../services/SendMail");

exports.authenticateUser = async(req,res,next) =>{
    const id = req.body.userApplicationId
    const response = await Death.findById({id:userApplicationId})
    const userEmail = response.userEmail

    const otp = Math.floor(1000 + Math.random() * 9000);
    userEmail[0].otp = otp
    await userEmail[0].save()
    await sendMail({
        email:email,
        subject:"Your Otp for Death Application",
        message:`Your otp is ${otp}. Don't share it with anyone`
    })
    res.status(200).json({
        message:"OTP sent successfully",
        data:email
    })
    next();
}