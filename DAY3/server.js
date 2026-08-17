//create a notes app backend
const express = require('express');
const app = express();

app.use(express.json());

let notes = [];

app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.json({
        message:"notes added Successfully",
        notes:notes
    });
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
