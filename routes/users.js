var express = require('express');
var router = express.Router();
var sql = require('mssql');
var TYPES = require('tedious').TYPES;



var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/tid', function (req, res, next) {
  ConnData()
  res.send("Bigman")
});
router.get('/tid2', function (req, res, next) {
  ConnData()
  res.send(ConnData())
});

function ConnData() {
  var x = "test"

  const sqlConfig2 = {
    server: '45.77.38.34',
    userName: 'sa',
    password: 'critical4875',
    //driver: 'tedious',
    //encrypt: false,
    options: {
      encrypt: true,
      database: 'SP4807',
    }
    //driver: 'MSSQLSERVER',
  }
  
  var connection = new Connection(sqlConfig2)
  connection.on('connect', function(err) {
    if (err) {
      console.log("EROR787898",err);
    } else {
      executeStatement();
    }
  });

  function executeStatement() {
    var sd = "admin"
    var sqlcommand = "SELECT * FROM userTest WHERE username = @username"
    request = new Request(sqlcommand, function(err, rowCount) {
      if (err) {
        console.log(err);
      } else {
        console.log(rowCount + ' rows');
      }
      connection.close();
    });
  
    request.on('row', function(columns) {
      columns.forEach(function(column) {
        if (column.value === null) {
          console.log('NULL');
        } else {
          console.log(column.value);
        }
      });
    });

    request.addParameter('username', TYPES.VarChar, sd);
  
    connection.execSql(request);
  }
  return x;
  
}

function CreatePDFrequest(){

  



}
module.exports = router;
