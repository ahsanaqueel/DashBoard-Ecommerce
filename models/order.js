let mongoose = require('mongoose');

let orderSchema = mongoose.Schema({

    customerName:{
        type:String,
        required:true
    },
    customerEmail:{
        type:String,
        required:true
    },
    customerPhone:{
        type:String,
        required:true
    },
    customerAddress:{
        type:String,
        required:true
    },
    orderStatus:{
        type:String,
        required:true
    },
    orderAmount:{
        type:Number,
        required:true
    },
    productQuantity:{
        type:Number,
        required:true
    },
    productSize:{
        type:String,
        required:true
    } 

});

module.exports = mongoose.model("order",orderSchema);