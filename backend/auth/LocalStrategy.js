const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

module.exports = new LocalStrategy((username,password,done)=>{
    User.findOne({username:username},(err,user)=>{
        if (err) { return done(err); }

        if(!user || !user.validPassword(password)){
            return done(null,false,{ message: 'User or password wrong' })
        }
        return done(null,user);

    });
});