const usermodel=require("../../models/user.mod")

const userpost= async(req,res)=>{

     try{
        const name=req.body.name
        const email=req.body.email
        const number=req.body.number
        const password=req.body. password
        const distrcit=req.body.distrcit
        const uppazila =req.body.uppazila
        const village=req.body.village
        const finduser= await usermodel.findOne({email:email})
        if(finduser){
         res.status(202).send("exist")
        }
        else{
         const data= new usermodel({
            name:name,
            email:email,
            number:number,
            password:password,
            distrcit:distrcit,
            uppazila:uppazila,
            village:village})
          const user= await data.save()
          if(user){
            res.status(200).send(user)
          }
          else(
            res.status(202).send("Pleas try again")
          )
        }
     }
     catch(e){
        res.status(404).send(e)
     }
}

module.exports=userpost