

const express=require("express");
const app = express();


app.use((req,res)=>{
    res.send("hello dosto kaise ho")
})
app.listen(3000,()=>{
    console.log("sucessfull running");
});