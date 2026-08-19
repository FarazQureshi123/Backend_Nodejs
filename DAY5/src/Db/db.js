const mongoose = require('mongoose');

function connecttoDB(){
    mongoose.connect("mongodb+srv://fzq321boy_db_user:FdMt1C796QxV0aU8@cluster0.wuqkp9x.mongodb.net/practice").then(
        ()=>{
            console.log("Connected to DB Successfully");
        }
    )
}

module.exports = connecttoDB;