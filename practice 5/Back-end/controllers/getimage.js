const usermodel=require("../models/user.mod")
const getimage=async(req,res)=>{
try{

    const email=req.params.email
    const info=await usermodel.findOne({email:email})
  if(info){
    res.download(info.image.path,info.image.filename)
  }else{
    res.status(202).send("not valid")
  }
    

}catch(e){
     res.status(404).send(e)
}
}
module.exports=getimage