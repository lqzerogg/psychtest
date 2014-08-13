var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '软妹子测试！准到爆！！！' });
});
/* GET users listing. */
router.get('/outcome', function(req, res) {
  res.render('outcome', { title: 'Express' });
});

module.exports = router;
