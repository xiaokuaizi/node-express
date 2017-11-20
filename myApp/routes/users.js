var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{title: "用户首页", content: "用户首页"});
});

router.get('/slj', function(req, res, next) {
  res.render('users',{title: "用户界面",content: '用户名字为slj'});
});



module.exports = router;
