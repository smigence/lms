var express = require('express');
var mysql = require('mysql');
var cors = require('cors');

var con =   mysql.createConnection ({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_app"
});

var router = express.Router();
router.use(cors());

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM account", function (err, result, fields) {
    if (err) throw err;
    router.get('/', function(req, res, next) {
      res.json(result);
    });
  });
});

module.exports = router;
