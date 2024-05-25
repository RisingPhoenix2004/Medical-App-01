const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'llmstethoscope@gmail.com',
        pass:'qpaw hvqn eejv xewh'

    }
});

const sendOtp = async (email,otp)=>{

    try {
        const mailOptions = {
            from:'llmstethoscope@gmail.com',
            to:email,
            subject:'Your OTP Code is ',
            text:`Your OTP code is ${otp}`
        };
        await transporter.sendMail(mailOptions);
        console.log('Email Sent Successfully');
    } catch (error) {
        console.error("Failed to send Email");
    }
};

module.exports = {sendOtp};