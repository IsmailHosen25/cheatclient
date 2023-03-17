const express=require("express")
const app=express()

const cors=require("cors")
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const dbconnected=require("./dbconnection")
const url="mongodb://127.0.0.1:27017/practic2";
dbconnected(url).then(()=>{
    console.log("DB is connected")
})


const loginpost=require("./routes/login.postr")
app.post("/login", loginpost)

const loginget=require("./routes/login.getr")
app.get("/login", loginget)
module.exports=app