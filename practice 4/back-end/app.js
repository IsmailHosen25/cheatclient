const express= require('express')
const app=express()
const cors=require("cors")
const router= require("./routes/user.route")

app.use(express.json())
app.use(cors())

app.use("/user", router)

module.exports=app