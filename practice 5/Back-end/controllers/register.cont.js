const usermodel=require("../models/user.mod")
const bcrypt=require("bcrypt")
const register=async(req,res)=>{
try{
    const username=req.body.username
    const email=req.body.email
    const checkuser= await usermodel.findOne({email:email})
    if(checkuser){
        res.status(200).send({
            message:"valid User"
        })
    }else{
        const hashedpassword= await bcrypt.hash(req.body.password, 10)
        const data= new usermodel({
            username:username,
            email:email,
            password:hashedpassword
        })
        const user= await data.save()
        if(user){
            res.status(200).send({ message:"Sign in done"})
        }
        else{
            res.status(202).send({
                message:"User not save"
            })
        }
    }

}catch(e){
    res.status(404).send({
        error:e
    })
}
}
module.exports=register