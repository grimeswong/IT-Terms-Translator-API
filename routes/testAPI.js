var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(`req.query = ${req.query}`);
    res.send(JSON.stringify(req.query));
    // res.send('API is working properly');
});

module.exports = router;
