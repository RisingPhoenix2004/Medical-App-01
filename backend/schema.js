const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// User Schema

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

},{
    collection:"Users"
});


module.exports = mongoose.model('User',userSchema);


