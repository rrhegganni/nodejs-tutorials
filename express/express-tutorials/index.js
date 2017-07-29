var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());


//app.METHOD(path, ...handler(middlewares))

app.get('/', function(req, res) {

  res.send("WELCOME TO EXPRESS");
});

app.post('/', function(req, res) {
  app.use(bodyParser());
  var body = req.body;
  res.send("Great I got this:-> " + JSON.stringify(body));
});

app.listen(3000, function(err) {
  if(err) console.log(err);
  console.log("App is running on 3000");
});
