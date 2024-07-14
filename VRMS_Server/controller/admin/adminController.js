import  Birth from "../../model/birthModel.js";
import  Death from "../../model/deathModel.js";

export const getBirthApplications = async(req,res)=>{
    const birthApplications = await Birth.find().populate("userApplicationId")
    if(birthApplications.length==0){
        return res.status(400).json({
            message:"No Birth Applications found",
            data:[]
        })
    }
    res.status(200).json({
        message:"Birth Applications fetched successfully",
        data:birthApplicationsa
    })
}
export const getSingleBirthApplication = async(req,res)=>{
    const {userApplicationId} = req.params
    const applicationFound = await Birth.findById(userApplicationId)
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

export const updateBirthAppStatus = async(req,res)=>{
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
export const verifyBirthApplications = async(req,res)=>{
    const {id} = req.params
    const applicationFound = await Birth.findById(id)
    if(!applicationFound ){
        return res.status(400).json({
            message:"No application with this id"
        })
    }
    if(!applicationFound.applicationStatus || !['underreview','rejected','verified'].includes(applicationFound.applicationStatus.toLowerCase())){
        return res.status(400).json({
            message:"Invalid Application Status"
        })
    }
    const updateStatus = await Birth.findByIdAndUpdate(id,{
        applicationStatus:"verified"
    },{new:true})
    res.status(200).json({
        message:"Application Verified Successfully",
        data:updateStatus
    })
    
}
export const rejectBirthApplications =async(req,res)=>{
    const {id} = req.params;
    if(!id || id==0){
        return res.status(400).json({
            message:"Please enter a valid id"
        })
    }
    const applicationFound = await Birth.findById(id);
    if(!applicationFound){
        return res.status(400).json({
            message:"No application with this id"
        })
    }
    const rejectApplication = await Birth.findByIdAndDelete(id);
    res.status(200).json({
        message:`The Birth Application with id: ${id} is rejected successfully`,
    })
}

//death
export const getDeathApplications = async(req,res)=>{
    const DeathApplications = await Death.find().populate("userApplicationId")
    if(DeathApplications.length==0){
        return res.status(400).json({
            message:"No Death Applications found",
            data:[]
        })
    }
    res.status(200).json({
        message:"Death Applications fetched successfully",
        data:DeathApplications
    })
}
export const getSingleDeathApplication = async(req,res)=>{
    const {userApplicationId} = req.params
    const applicationFound = await Death.findById(userApplicationId)
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

export const updateDeathAppStatus = async(req,res)=>{
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
export const verifyDeathApplications =async(req,res)=>{
    const {id} = req.params
    const applicationFound = await Death.findById(id)
    if(!applicationFound ){
        return res.status(400).json({
            message:"No application with this id"
        })
    }
    if(!applicationFound.applicationStatus || !['underreview','rejected','verified'].includes(applicationFound.applicationStatus.toLowerCase())){
        return res.status(400).json({
            message:"Invalid Application Status"
        })
    }
    const updateStatus = await Death.findByIdAndUpdate(id,{
        applicationStatus:"verified"
    },{new:true})
    res.status(200).json({
        message:"Application Verified Successfully",
        data:updateStatus
    })
    
}
export const rejectDeathApplications = async(req,res)=>{
    const {id} = req.params;
    if(!id || id==0){
        return res.status(400).json({
            message:"Please enter a valid id"
        })
    }
    const applicationFound = await Death.findById(id);
    if(!applicationFound){
        return res.status(400).json({
            message:"No application with this id"
        })
    }
    const rejectApplication = await Death.findByIdAndDelete(id);
    res.status(200).json({
        message:`The Death Application with id: ${id} is rejected successfully`
    })
    
}
