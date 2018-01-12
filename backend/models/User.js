const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

mongoose.plugin(require('mongoose-bcrypt'));

let UserModel = mongoose.model('User',{
    username:{type:String,unique:true,require:true},
    email:{type:String,unique:true,require:true},
    password:{type:String,bcrypt:true,rounds:9,require:true}
});

UserModel.validPassword = (password,user)=>{
    return bcrypt.compareSync(password,user.password);
}

module.exports = UserModel;