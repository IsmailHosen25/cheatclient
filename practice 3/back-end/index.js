const {app,dbconnected }= require("./app");
const port=3005;
app.listen(port,async ()=>{
    console.log(`your server is running at http://localhost:${port}`)
    await dbconnected();
})