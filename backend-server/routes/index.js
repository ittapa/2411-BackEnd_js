var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('/users'); // 사용자 목록 페이지로 리디렉션
});

module.exports = router;
