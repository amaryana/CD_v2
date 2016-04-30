var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  var cors = require('cors');
  var mongoose = require('mongoose');
  var passport = require('passport');
  var FacebookStrategy = require('passport-facebook').Strategy;
  var session = require('express-session');
  var keys = require('./keys');
  var port = 8888;


  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/public'));
  app.use(session({secret:'correcthorsestaplebattery'}));
  app.use(passport.initialize());
  app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID: keys.facebookKey,
  clientSecret:keys.facebookSecret,
  callbackURL:'http://localhost:8888/auth/facebook/callback/'
}, function(token, refreshToken, profile, done){
  return done(null, profile);
  }
));

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook',{
    successRedirect:'/day',
    failureRedirect:'/day'
  }), function(req, res) {
    console.log(req.session);
  });

app.get('/me', function(req, res){
  console.log(req.user);
  return res.send(req.user);
});

var authcheck = function(req, res, next){
  if(req.user){
    // res.status(200).json({loggedIn: true});
    next();
  }else{
    res.status(401).json({loggedIn:false});
  }
};

app.post("/url", authcheck, function(req, res){
  console.log(req.user);
  return res.send(req.user);
});
passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(obj, done){
  done(null, obj);
});




  app.listen(port, function() {
      console.log('Listening on ' + port);
  });
