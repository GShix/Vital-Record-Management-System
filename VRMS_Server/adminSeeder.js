import bcrypt from 'bcryptjs'
import Admin from './model/adminModel.js'
const adminSeeder= async()=>{
    const adminFound = await Admin.findOne({adminEmail:"admin.babaimuni@gmail.com"})
    if(!adminFound){
        await Admin.create({
            adminName:"admin",
            adminEmail:"admin.babaimuni@gmail.com",
            adminPassword:bcrypt.hashSync("Admin",10)
        })
        console.log("Admin seeded successfully")
    }else{
        console.log("Admin already exist")
    }
}
export default adminSeeder;