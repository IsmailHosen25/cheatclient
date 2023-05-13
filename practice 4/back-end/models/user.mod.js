const mongoose=require("mongoose")
const userpost= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    distrcit:{
        type:String,
        required:true
    },
    uppazila:{
        type:String,
        required:true
    },
    village:{
        type:String
    }
})
const usermodel= mongoose.model("users", userpost)
module.exports=usermodel