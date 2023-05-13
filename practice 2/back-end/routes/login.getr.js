const express=require("express")

const logingetcont=require("../controller/login.getc")
const router=express()
router.get("/login", logingetcont)
module.exports=router