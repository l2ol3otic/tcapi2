var express = require('express');
var router = express.Router();
var sql = require('mssql');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/tid', function (req, res, next) {
  res.send(ConnData())
});

function ConnData() {

  const sqlConfig = {
    server: '45.77.38.34',
    user: 'sa',
    password: 'critical4875',
    driver: 'tedious',
    database: 'SP4807',
    //encrypt: false,
    options: {
      instanceName: 'sql',
      encrypt: false,
    }
    //driver: 'MSSQLSERVER',
  }

  sql.connect(sqlConfig, function () {
    var request = new sql.Request();
    var sd = "admin"
    request.query("select * from dbo.userTest Where = '?'", sd, function (err, result, fields) {
      if (err) console.log(err);
      console.log(result)
      res.end(JSON.stringify(recordset)); // Result in JSON format
      sql.close()
      console.log("Succecss")
    });
  });
}
module.exports = router;
