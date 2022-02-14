const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required:[true,"Please Enter a product Title"]
    },
    price: {
        type: Number,
        required:[true,"please provide Product price"]
    },

    description: {
        type:String
    }

},{timestamps:true})

module.exports = mongoose.model('Product',ProductSchema);
