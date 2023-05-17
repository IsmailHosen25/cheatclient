require("dotenv").config()
const mongoose=require("mongoose")
const dblink=process.env.CONNECTDB

const dbconnected=async()=>{
    try{

        await mongoose.connect(dblink)
        console.log("DB is connected")

    }catch(e){
        console.log(e)
    }
}
module.exports=dbconnected