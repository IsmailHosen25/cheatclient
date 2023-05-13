const usermodel= require("../models/user.mod")
const userupdate= async(req,res)=>{

   try{
       const email=req.params.email
       const name=req.body.name
       const number=req.body.number
       const distrcit=req.body.distrcit
       const uppazila =req.body.uppazila
       const village=req.body.village
       const user= await usermodel.findOne({email:email})
       const updateuser= await usermodel.findByIdAndUpdate(
        {_id:user.id},
        {
            $set:{
                name:name,
                number:number,
                distrcit:distrcit,
                uppazila:uppazila,
                village:village
            }
        },
        {new:true}
        )
        if(updateuser){
            res.status(200).send(updateuser)
        }
        else{
            res.status(200).send({
              message:"did not updated"
            })
        }

   }

   catch(e){
    res.status(505).send(e)
   }

}
module.exports=userupdate