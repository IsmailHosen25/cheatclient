const mongoose=require("mongoose")

const dbconnected= async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/practice4")
        console.log("db is connected")
    }catch(e){
        console.log("d is not connected")
        console.log(e)
        process.exit(1)
    }
          
}

module.exports=dbconnected