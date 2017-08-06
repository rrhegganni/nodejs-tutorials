var empData = [
  {
    "name": "Rakesh",
    "id": "1",
    "mobile": 8105479865
  },
  {
    "name": "Ramesh",
    "id": "2",
    "mobile": 8105479865
  },
  {
    "name": "suresh",
    "id": "3",
    "mobile": 8105479865
  },
  {
    "name": "amar",
    "id": "4",
    "mobile": 8105479865
  }
];

var getEmpById = function( id ) {
  var employee;
  empData.map( function(emp, index) {
    if( emp.id === id ) {
      employee = emp;
    }
  });
  return employee;
}

var addEmp = function( emp ) {
  empData.push( emp );
  return empData;
}

var updateEmpById = function( id ) {
  var employee;
  empData.map( function(emp, index) {
    if( emp.id === id ) {
      employee = emp;
      employee.mobile = "9876543210";
    }
  });
  return empData;
}

var deleteEmpById = function ( id ) {
  var index = parseInt(id) - 1;
  empData.splice(index, 1);
  return empData;
}

module.exports = {
  deleteEmpById,
  updateEmpById,
  addEmp,
  getEmpById
}
