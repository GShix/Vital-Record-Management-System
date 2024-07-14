import Admin from "../../model/adminModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const adminLogin = async(req,res)=>{
    try {
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
            //generate token
            const token = jwt.sign({id:adminFound[0]._id},process.env.SECRET_KEY,{expiresIn:'5m'})
            res.status(200).json({
                message:"admin logined successfully.",
                data:adminFound,
                token:token
            })
        }
        else{
            res.status(400).json({
                message:"Invalid Email or Password"
            })
        }
    } catch (error) {
        console.log(error);
    }
}
export default adminLogin;