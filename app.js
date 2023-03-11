const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('I am in the middleware!');
    next();
});
app.use((req,res,next)=>{
    console.log('I am again in middleware!');
    res.send('<h1>Welcome to my express application');
});
app.listen(3000);
