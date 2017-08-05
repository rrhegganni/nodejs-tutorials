var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

app.use(express.static('images'));

var middlewares = function(req, res, next) {
  console.log("Great I'm a middleware");
  if(req.params) {
    res.send()
  } else {
    next();
  }
}

var errHandler = function(err, req, res, next) {
  if(err) {
    console.log("ERROR: ", err);
  }
}

app.use(errHandler);

app.get('/', middlewares, function(req, res) {
  throw new Error("Something went wrong");
  console.log("callback function");
  res.send()
});

app.post('/', function(req, res) {
  var body = req.body;
  res.send("Great I got this:-> " + JSON.stringify(body));
});



app.listen(3000, function(err) {
  if(err) console.log(err);
  console.log("App is running on 3000");
});
