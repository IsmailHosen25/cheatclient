const usermodel =require("../../models/user.mod")
const userdlt= async(req,res)=>{
try{
     const email=req.params.email
     const user= await usermodel.findOne({email:email})
     if(user){
        const dlt=await usermodel.findByIdAndDelete({_id:user.id})
        res.status(204).send(dlt)
     }
     else{
        res.status(202).send("something error, please try again")
     }


}catch(e){
    res.status(404).send(e)
}
}
module.exports=userdlt