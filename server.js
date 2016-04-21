var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

var port = 80;
// app.listen(port, function(){
//  console.log("Listeing on port " + port);
// });
app.listen(port, function(){
  console.log("Listening to aliens on port " + port);
})
