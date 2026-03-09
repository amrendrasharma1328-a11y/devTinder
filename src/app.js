

const express=require("express");
const app = express();


app.use("/user",(req,res,next)=>{
    console.log("response 1 !!")
    // res.send("this is response 1!!")
    next();
},
(req,res,next)=>{
    console.log("ayr batao ");
    // res.send("response 2!!")
    next();
})



// is caseme nhi work krega bacuse xpress kahega ki aage kya hai me get nhi kr pa arha 



app.get("/user",(req,res,next)=>{
    console.log("response 1 !!")
    res.send("this is response 1!!")
    next();
})
app.get("/user",(req,res,next)=>{
    console.log("response 1 !!")
    res.send("this is response 2!!")
    next();
})
app.listen(3000,()=>{
    console.log("sucessfull running");
});


