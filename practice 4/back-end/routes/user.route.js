const express =require("express")
const router=express.Router()
const userpost=require("../controllers/userpost.cont")
const userget =require("../controllers/userget.cont")
const userselfget =require ("../controllers/userself.cont")
const userupdate = require("../controllers/userudt")
router.get("/", userget)
router.get("/:email", userselfget)
router.post("/", userpost )
router.put("/:email", userupdate )

module.exports=router