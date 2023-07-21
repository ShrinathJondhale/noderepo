const { error } = require('console');
const express=require('express');
const { request } = require('http');
const mysql =require('mysql');
const appforuser=express.Router();
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'manager',
        database:'dac2023'
    }
);

appforuser.get("/",(request,response)=>{
    connection.query("select * from user",(error,result)=>{
        if(error==null)
        {
             var data=JSON.stringify(result);
             response.setHeader("Content-Type","application/json");
             response.write(data);
        }else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);         
        }
        response.end();
    })
})

appforuser.post()



module.exports=appforuser;
