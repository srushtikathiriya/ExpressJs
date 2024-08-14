const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    category: String,
    price:{
        type:Number
    },
    brand:{
        type:String
    }
})

module.exports = mongoose.model('product',productSchema);