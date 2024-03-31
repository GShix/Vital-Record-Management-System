const bcrypt = require("bcryptjs")
const Admin = require("./model/adminModel")

exports.adminSeeder= async()=>{
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