const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.post('/create', function(req, res, next) {
  let user = new User(req.body);
  user.save((err,user)=>{
    if(err){
      err.status = 400;
      next(err);
    }else{
      user.set('password', undefined);
      user.set('_id', undefined);
      res.send(user);
    }      
  });
});

router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));

module.exports = router;
