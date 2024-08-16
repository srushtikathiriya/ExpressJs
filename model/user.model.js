const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    hobbies:[{
        type:String
    }],
    address:{
        line1:String,
        line2:String,
        pincode:Number
    },
    image:{
        type:String
    }
})

module.exports = mongoose.model('users',userSchema);