require("dotenv").config()
const usermodel=require("../models/user.mod")
const bcrypt= require("bcrypt")
const jwt=require("jsonwebtoken")

const loginuser=  async (req,res)=>{
try{
     const email=req.body.email
     const password=req.body.password
     const checkuser= await usermodel.findOne({email:email})
    if(checkuser){
        const  validpassword=await bcrypt.compare(password,checkuser.password)
        if(validpassword){
            const payload={
                username:checkuser.username,
                email:checkuser.email
            }
            const token= jwt.sign(payload,process.env.SECRER_KEY,{ expiresIn:"1h"})
            return  res.status(200).send({
                message:"valid user",
                token:"Bearer " + token
            })
        }else{
                res.status(202).send({
                    message:"wrong password"
                })
        }
    }else{
        res.status(202).send({
            message:"user not authorized"
        })
    }

}catch(e){
    res.status(404).send({
        error:e
    })
}
}
module.exports=loginuser