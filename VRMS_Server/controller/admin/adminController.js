const Birth = require("../../model/birthModel")
const Death = require("../../model/deathModel")

exports.getBirthApplications = async(req,res)=>{
    const birthApplications = await Birth.find().populate("userApplicationId")
    if(birthApplications.length){
        return res.status(400).json({
            message:"No Birth Applications found",
            data:[]
        })
    }
    res.status(200).json({
        message:"Birth Applications fetched successfully"
    })
}
exports.getSingleBirthApplication = async(req,res)=>{
    const {userApplicationId} = req.params
    const applicationFound = await Birth.findById(applicationFound)
    if(!applicationFound){
        return res.status(400).json({
            message:"No Application found with this id"
        })
    }
    res.status(200).json({
        message:"Birth Application Fetched",
        data:applicationFound
    })
}

exports.updateBirthAppStatus = async(req,res)=>{
    const {userApplicationId} = req.params
    const {applicationStatus}= req.body
    const applicationFound = await Birth.findById(userApplicationId)
    if(!applicationFound){
        return res.status(400).json({
            message:"No Application found with this id"
        })
    }
    if(!applicationStatus || !["underreview","rejected","verified"].includes(applicationStatus.toLowerCase())){
        return res.status(400).json({
            message:"Invalid Application Status"
        })
    }
    const updateStatus = await Birth.findByIdAndUpdate(userApplicationId,{
        applicationStatus
    },{new:true})
    res.status(200).json({
        message:"Birth Application Fetched",
        data:updateStatus
    })
}


//death
exports.getDeathApplications = async(req,res)=>{
    const DeathApplications = await Death.find().populate("userApplicationId")
    if(DeathApplications.length){
        return res.status(400).json({
            message:"No Death Applications found",
            data:[]
        })
    }
    res.status(200).json({
        message:"Death Applications fetched successfully"
    })
}
exports.getSingleDeathApplication = async(req,res)=>{
    const {userApplicationId} = req.params
    const applicationFound = await Death.findById(applicationFound)
    if(!applicationFound){
        return res.status(400).json({
            message:"No Application found with this id"
        })
    }
    res.status(200).json({
        message:"Death Application Updated",
        data:applicationFound
    })
}

exports.updateDeathAppStatus = async(req,res)=>{
    const {userApplicationId} = req.params
    const {applicationStatus}= req.body
    const applicationFound = await Death.findById(userApplicationId)
    if(!applicationFound){
        return res.status(400).json({
            message:"No Application found with this id"
        })
    }
    if(!applicationStatus || !["underreview","rejected","verified"].includes(applicationStatus.toLowerCase())){
        return res.status(400).json({
            message:"Invalid Application Status"
        })
    }
    const updateStatus = await Death.findByIdAndUpdate(userApplicationId,{
        applicationStatus
    },{new:true})
    res.status(200).json({
        message:"Death Application Updated",
        data:updateStatus
    })
}