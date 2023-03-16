const express =require("express")
const router=express()
const postproduct =require("../controller/product.postcont")
router.post("/product", postproduct)
module.exports=router