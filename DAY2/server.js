// create an express server and get api for home and about 
const express =  require('express');
const app = express();

app.get('/home',(req,res)=>{
    res.send("Welcome to the Home page!!");
})

app.get('/about',(req,res)=>{
    res.send("This is the About Section.");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})