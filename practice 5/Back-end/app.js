const express= require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const userrouter=require("./routes/user.route")

app.use("/user",userrouter)

module.exports=app