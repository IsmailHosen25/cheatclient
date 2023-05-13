const express =require("express")
const router=express.Router()
const userpost=require("../controllers/userpost.cont")
const userget =require("../controllers/userget.cont")

router.get("/", userget)
router.post("/", userpost )


module.exports=router