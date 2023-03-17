const loginmodel=require("../module/login.postm")
const logingetc=async(req,res)=>{
    try{
    const data= await loginmodel.find({})
    res.send(data)
    }catch(error){
      console.log(error)
    }
}
module.exports=logingetc