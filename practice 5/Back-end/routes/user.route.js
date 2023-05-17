const express=require("express")
const router=express.Router()
const register= require("../controllers/register.cont")
const login=require ("../controllers/login.con")
const checkjwt=require("../middleware/jwtcheck.mid")
const alluser = require("../controllers/getalluser.cont")

router.get("/profile",checkjwt,alluser )

router.post("/register", register )

router.post("/login", login)

module.exports=router