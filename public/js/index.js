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
  callbackURL:'http://cosmicdigest.com/auth/facebook/callback'
}, function(token, refreshToken, profile, done){
  return done(null, profile);
  }
));

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook',{
    successRedirect:'/me',
    failureRedirect:'/login'
  }), function(req, res) {
    console.log(req.session);
  });

app.get('/me', function(req, res){
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
