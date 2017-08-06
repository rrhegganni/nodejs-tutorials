const express = require('express');
const bodyParser = require('body-parser');
const emp = require('./employee');
var app = express();


app.use(bodyParser());

app.get('/:id' ,function(req, res){
  var employee = emp.getEmpById( req.params.id );
  res.send(JSON.stringify(employee));
});

app.post('/', function( req, res ) {
  var employee = req.body;
  var employees = emp.addEmp(employee);
  res.send(JSON.stringify(employees));
});

app.put('/:id', function(req, res) {
  var employees = emp.updateEmpById(req.params.id);
  res.send(JSON.stringify(employees));
});

app.delete('/:id', function(req, res) {
  var employees = emp.deleteEmpById(req.params.id);
  res.send(JSON.stringify(employees));
})

app.listen(8000, function(err) {
  if(err) console.log("Errror");

  console.log("app is running")
})
