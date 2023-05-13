const usermodel = require("../models/user.mod")
const userselfget =async(req,res)=>{
    try{
        
    const email=req.params.email
    const user= await usermodel.findOne({email:email})
    if(user){
        res.status(200).send(user)
    }else{
        res.status(404).send("There is somthig wrong")
    }


    }catch(e){
        res.status(505).send(e)
    }
}
module.exports=userselfget