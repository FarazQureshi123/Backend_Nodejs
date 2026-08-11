// const catme =  require("cat-me"); // Here I have install catme package to print cats 
// console.log(catme());

//Creating a Simple http Server
const http = require("http");
const server = http.createServer((req,res)=>{
    console.log("Hello from Nodejs!!");
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})