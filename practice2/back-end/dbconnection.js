const mongoose=require("mongoose")
const dbconnected= async (url)=>{
    return await mongoose.connect(url)
}
module.exports=dbconnected