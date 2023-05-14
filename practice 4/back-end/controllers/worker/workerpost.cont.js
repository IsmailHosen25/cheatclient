const usermodel=require("../../models/user.mod")
const workerpost=async(req,res)=>{
try{
     
    const distrcit=req.body.distrcit
    const uppazila=req.body.uppazila
    const village=req.body.village
    const user= await usermodel.find({distrcit:{$eq:distrcit},uppazila:{$eq:uppazila},village:{$eq:village}})
   if(user.length<5){
       const moreuser= await usermodel.find({distrcit:{$eq:distrcit},uppazila:{$eq:uppazila}})
       if(moreuser.length<10){
        const moreusers= await usermodel.find({distrcit:{$eq:distrcit}})
        res.status(200).send(moreusers)
       }
       else{
        res.status(200).send(moreuser)
       }
   }else{
    res.status(200).send(user)
   }

}catch(e){
    res.status(404).send(e)
}
}
module.exports=workerpost