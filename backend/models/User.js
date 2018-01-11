const mongoose = require('mongoose');
const bcrypt = require('mongoose-bcrypt');

mongoose.plugin(bcrypt);

let UserModel = mongoose.model('User',{
    username:{type:String,unique:true,require:true},
    email:{type:String,unique:true,require:true},
    password:{type:String,bcrypt:true,rounds:9,require:true}
});

module.exports = UserModel;