const express=require("express");
const app=express();
const mongoose=require("mongoose")
const cors=require("cors")
app.use(cors())
app.use(express.json())
const test = new mongoose.Schema({
    name:String,
    age:Number
})
const testmodel=mongoose.model("testdone", test);
const dbconnected = async ()=>{
    try{
      await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("db is connected")
    }catch(error){
    console.log("db is not connected")
    console.log(error.massage)
    process.exit(1)
    }
}
app.get("/", async (req,res)=>{
    try{
       const data = await testmodel.find()
        if(data){
            res.status(200).send(data)
        }
        else{
            res.status(404).send({
              message:"product not found"
            })
        }
    }catch(error){
        res.status(500).send({
            message:error
        })
    }
   
})
app.get("/user",async(req,res)=>{
    try{
        const age= req.query.age
         const user= await testmodel.find({$or:[{age:{$in:age}},{age:{$gt:age}}]}).select({
            _id:0
         }).sort({age:1})
         if(user){
            res.status(202).send(user)
         }
         else{
            res.status(505).send({
                  message:"user not found"
            })
         }
       
    }
    catch(error){
            res.status(404).send({
                success:false,
                message:error
            })
    }
})
app.get("/user/:name",async (req,res)=>{
    try{
        const user=req.params.name;
        const finduser= await testmodel.findOne({name:user},{
         _id:0,
         name:1,
         age:1
        })
        if(finduser){
            res.status(200).send(finduser)
        }
        else{
            res.status(505).send({message:"User not found"})
        }
    }
    catch(error){
        res.status(505).send({
            message:error
        })
    }
})
app.post("/", async (req,res)=>{
    const name=req.body.name
    const age=req.body.age
    const getnewtest=new testmodel({
        name:name,
        age:age
    })
    const testdata= await getnewtest.save()
    res.status(201).send(testdata)
})
app.delete("/duser/:id", async(req,res)=>{
    try{
      const id=req.params.id
      const deleteuser=  await testmodel.findByIdAndDelete({_id: id})
      res.status(200).send(deleteuser)
    }catch(error){
        res.status(500).send({message:error.message})
    }
})
module.exports={app,dbconnected}