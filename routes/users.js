var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({name:'wurong',age:26});
});

module.exports = router;
