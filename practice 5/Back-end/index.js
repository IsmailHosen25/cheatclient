require("dotenv").config()
const app= require("./app")
const db=require("./dbconnetcd")
const port=process.env.PORT || 4000
app.listen(port,async()=>{
    console.log(`your server is running at http://localhost:${port}`)
    await db()
})