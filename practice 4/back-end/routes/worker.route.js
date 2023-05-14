const express =require("express")
const router= express.Router()
const workerpost=require('../controllers/worker/workerpost.cont')
router.post("/", workerpost)

module.exports=router