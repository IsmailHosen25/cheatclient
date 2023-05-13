const app=require("./app")
const db=require("./mongodb")
const port=3001;




app.listen(port, async()=>{
    console.log(`Your server is running at http://localhost:${port}`)
    await db()
})