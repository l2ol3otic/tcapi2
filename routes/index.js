var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Test', function(req, res, next) {
  res.render('index', { title: 'Express789' });
});

module.exports = router;
