const usermodel=require("../models/user.mod")
const updateuser = async(req,res)=>{
try{
    const email=req.params.email
    const filename=req.file.filename
    const path=req.file.path
    const data=await usermodel.findOne({email:email})
     if(data){
        const update= await usermodel.findByIdAndUpdate({_id:data.id},
            {
                $set:{
                     image:{
                        filename:filename,
                        path:path
                     }
                }
            },
            {new:true}
            
            )
            res.status(200).send({image:`http://localhost:3003/user/profile/file/${update.email}`})
     }
     else{
        res.status(202).send({data:"not found"})
     }

}catch(e){
    res.status(404).send({data:e})
}
}
module.exports=updateuser