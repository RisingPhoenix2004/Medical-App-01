const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const cors = require("cors");
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();
const User =require('./schema');
const port=5000;
const mongoUrl="mongodb+srv://adminsurya:surya2004@cluster0.mywbrqo.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json());
app.use(cors({
    origin:"http://192.168.0.108:8081",
    credentials:true
}));


let db=async()=>{
    try{
        await mongoose.connect(mongoUrl);
        console.log("Connected to database");
    }
    catch(err)
    {
        console.log("Error Connecting");
    }
}
db();
app.post('/signup',upload.none(),async(req,res)=>{
    try{
        const{email,username,phone,password} = req.body;
        const existingUser = await User.findOne({email:email});
        if(existingUser)
        {
            return res.status(400).send("User Already Exists!")
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser=new User({email,username,phone,password:hashedPassword})
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    }
    catch(err){
        console.error(err);
        res.status(500).send("Error User was Not Created!");
    }
})

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    console.log("Received a Login Request!");
    try{
        const user = await User.findOne({email});
        if(!user)
        {
            console.log("User Not Found with this email");
            return res.status(404).json({message:"User Not Found!"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            console.log("Invalid Password!!")
            return res.status(401).json({message:"Invalid Password!"});
        }
        res.status(200).send("Login successful");
    }
    catch(err)
    {
        console.error(err);
        res.status(500).send("Internal server error");
    }

})
app.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
})