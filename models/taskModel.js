const mongoose = require('mongoose');
// var plm = require('passport-local-mongoose');


const taskModel = new mongoose.Schema({
    name: String,
    type: String,
    taskfor:String
   
})

// userModel.plugin(plm);

var task = mongoose.model('task', taskModel);

module.exports = task;