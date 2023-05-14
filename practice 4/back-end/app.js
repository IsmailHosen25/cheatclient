const express= require('express')
const app=express()
const cors=require("cors")
const userrouter= require("./routes/user.route")
const workerrouter=require("./routes/worker.route")

app.use(express.json())
app.use(cors())

app.use("/user", userrouter)
app.use("/worker",workerrouter)

module.exports=app