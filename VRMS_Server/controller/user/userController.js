const Birth = require("../../model/birthModel")

exports.getMyBirthApplication =async()=>{
    const userApplicationId = req.userApplicationId
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