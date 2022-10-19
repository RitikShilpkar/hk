const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://shilpkarji01:Shilpkarji01@cluster0.h9uuau2.mongodb.net/hk?retryWrites=true&w=majority").then(()=>{
    console.log("mongoose connected")
}).catch((err)=>{
    console.log("Not connected mongo" + err)
})