const Admin = require("../../model/adminModel")

exports.adminLogin = async(req,res)=>{
    const {adminName,adminPassword}=req.body
    if(!adminName ||!adminPassword){
        return res.status(400).json({
            message:"Enter Email & Password."
        })
    }
    //else
    const adminFound = await Admin.find({adminName:adminName})
    if(adminFound.length==0){
        return res.status(400).json({
            message:"You have not permission to Login"
        })
    }
    //password match
    const matchPassword = bcrypt.compareSync(adminPassword,adminFound[0].adminPassword);
    if(matchPassword){
        res.status(200).json({
            message:"admin logined successfully."
        })
    }
    else{
        res.status(400).json({
            message:"Invalid Email or Password"
        })
    }
}