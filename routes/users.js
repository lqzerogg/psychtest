var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('outcome', { title: 'Express' });
});

module.exports = router;
