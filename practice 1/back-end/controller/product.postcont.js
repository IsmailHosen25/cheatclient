const produtModell=require("../model/product.model")

const postproduct=async(req,res)=>{
    try{
        const title=req.body.title
        const code=req.body.code
        const price=req.body.price
        const newproduct=new produtModell({
            title,code,price
        })
       const productData=await newproduct.save()
          res.send(productData)
    }catch(error){
        console.log(error)
    }
}
module.exports=postproduct