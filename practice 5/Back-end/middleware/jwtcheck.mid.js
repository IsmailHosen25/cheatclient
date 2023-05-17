const jwt=require("jsonwebtoken")
require("dotenv").config()
const checkjwt=(req,res,next)=>{
    const {authorization}=req.headers
    try{
          const token=authorization.split(" ")[1]
          const decoded=jwt.verify(token,process.env.SECRER_KEY)

          const  {username,email}=decoded
          req.username=username
          req.email=email
          next()
    }catch{
        next()
    }

}
module.exports=checkjwt