const mongoose=require('mongoose');


const recordSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    boughtAt:{
        type:Number,
        required:true
    },
    soldAt:{
        type:Number
    },
    royalty:{
        type:Number,
        required:true
    },
    profit:{
        type:Number
    },
    loss:{
        type:Number
    },
    quantity:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});





const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
