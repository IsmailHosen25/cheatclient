const express =require("express")
const getproduct =require("../controller/product.cont")
const router=express()

router.get("/product", getproduct)
module.exports=router