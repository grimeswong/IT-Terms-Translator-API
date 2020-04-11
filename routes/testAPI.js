var express = require('express');
var router = express.Router();
require('dotenv').config();
var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PW,
  database        : process.env.DB_NAME
});

var sql = "SELECT * FROM terms LIMIT 100";

router.get('/', function(req, res, next) {
    console.log(`query = ${req.query}`);

    pool.getConnection(function(err, connection) {
      if (err) throw err;
      console.log("Database Connected");

      connection.query(sql, function (err, results, fields) {
        if(err) throw err;
        connection.release();
        console.log('Query executing...')
        res.json(results);
      });
    })
});



module.exports = router;
