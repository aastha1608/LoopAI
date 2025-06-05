require('dotenv').config();
const URL=process.env.URL;

const mongoose=require("mongoose");

const connectWithDB=()=>{
    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((err)=>{
        console.log("Error in DB Connection");
    })
    }

module.exports=connectWithDB;