const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
       type:String,
       required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        filename:{
            type:String,
        },
        path:{
           type:String,
        }
}
})
const usermodel= mongoose.model("user",userSchema)
module.exports=usermodel