const usermodel=require("../../models/user.mod")
const userlogin = async(req,res)=>{
try{
    
    const email = req.params.email
    const password=req.body.password
    const find= await usermodel.findOne({email:email})
    if(find){
          const user= await usermodel.findOne({$and:[{email:{$eq:email}},{password:{$eq:password}}]})
         if(user){
            res.status(200).send(user)
          }
          else{
            res.status(202).send("Wrong password")
          }
    }else{
      res.status(202).send("user not valid")
    }


}catch(e){
    res.status(404).send(e)
}
}
module.exports=userlogin