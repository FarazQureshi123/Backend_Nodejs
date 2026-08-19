const express = require('express');
const connecttoDB = require("./src/Db/db");

connecttoDB();
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.end('Hello');
})

app.post('/notes',(req,res)=>{
    const {title,content} = req.body;
    console.log(req.body);
    res.end();
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})