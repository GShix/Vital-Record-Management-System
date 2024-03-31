const nodemailer = require("nodemailer")

const sendMail =async(options)=>{
    var transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.Email_User,
            pass:process.env.Email_Pass
        }
    });
    const mailOptions = {
        from: "Babai Rural Municipality <babaimunicipality@gmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.message
      };
    await transporter.sendMail(mailOptions)
}
module.exports = sendMail;