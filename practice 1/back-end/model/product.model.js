const mongoose=require("mongoose")
const productSchem=new mongoose.Schema({
   title:{
    type:String,
    required: true
   },
   code:{
    type:String,
    required:true
   },
   price:{
    type:String,
    required:true
   }
})
const produtModel=mongoose.model("products",productSchem)
module.exports=produtModel