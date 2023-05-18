const express=require("express")
const router=express.Router()
const register= require("../controllers/register.cont")
const login=require ("../controllers/login.con")
const checkjwt=require("../middleware/jwtcheck.mid")
const alluser = require("../controllers/getalluser.cont")
const upload= require("../middleware/multer.img")
const getimage=require("../controllers/getimage")
const updateuser=require("../controllers/updateuseer.con")
router.get("/profile",checkjwt,alluser )

router.put("/profile/:email",upload.single("file"),updateuser)

router.get("/profile/file/:email",getimage )

router.post("/register", register )

router.post("/login", login)

module.exports=router