const express=require("express")
const loginpostcont=require("../controller/login.postc")
const router=express()
router.post("/login", loginpostcont)
module.exports=router