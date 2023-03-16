const produtModell=require("../model/product.model")
const getproduct=async (req,res)=>{
   
    try{
    const product= await produtModell.find({})
    res.send(product)}
    catch(error){
        console.log(error)
    }

}
module.exports=getproduct