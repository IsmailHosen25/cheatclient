const loginmodel =require("../module/login.postm")
const loginpostcont= async (req,res)=>{
    try{
       const name=req.body.name;
       const email=req.body.email;
       const mobile=req.body.mobile;
       const password=req.body.password;

       const loginData=new loginmodel({
        name,email,mobile,password })
       await  loginData.save()
    }catch(error){
        console.log(error)
    }}
module.exports=loginpostcont