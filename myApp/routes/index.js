var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页',navList:[{
    txt: '首页',
    path: '/'
  },{
    txt: '用户首页',
    path: '/users'
  },{
    txt: '介绍',
    path: '/about'
  }]});
});

module.exports = router;
