const app=require("./app")
const port= 4005;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})