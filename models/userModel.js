const mongoose = require('mongoose');
// var plm = require('passport-local-mongoose');


const userModel = new mongoose.Schema({
    name: String,
    email: String,
    nummber:String,
    id: String,
   
})

// userModel.plugin(plm);

var user = mongoose.model('user', userModel);

module.exports = user;