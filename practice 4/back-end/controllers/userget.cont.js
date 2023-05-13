const usermodel = require("../models/user.mod")
const userget=async (req,res)=>{
try{
  const alluser= await usermodel.find().sort({
    _id:1
  })
  if(alluser){
    res.status(200).send(alluser)
  }else{
    res.status(404).send("User NOt found")
  }

}catch(e){
   res.status(500).send(e)
}
}
module.exports=userget