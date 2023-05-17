const usermodel=require('../models/user.mod')

const alluser=async(req,res)=>{

     try{ 
       
       const email=req.email
       const data= await usermodel.findOne({email:email}).select({
        _id:0,
        password:0
       })
       if(data){
        res.status(200).send({
          data:data
        })
       }else{
        res.status(202).send({data:"token expired"})
       }
       
           
     }catch(e){
         res.status(404).send({
            error:e
         })
     }
}
module.exports=alluser