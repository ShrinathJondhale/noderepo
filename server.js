const express=require('express');
const cors=require('cors');
const userrelatedroutes=require('./routes/user');
const app=express();
app.use(cors('*'));
app.use(express.json());
app.use('/user',userrelatedroutes);
app.listen(9999,()=>{
    console.log("Server started at 9999");
})
