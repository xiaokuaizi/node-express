var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{title: "用户首页",navList:[{
    txt: '首页',
    path: '/'
  },{
    txt: '用户首页',
    path: '/users'
  },{
    txt: '介绍',
    path: '/about'
  }],
  userList: [{
    userName: "Aviva",
    id: "Aviva",
  },{
    userName: "Abbi",
    id: "Abbi",
  },{
    userName: "jone",
    id: "jone",
  },{
    userName: "Aaron",
    id: "Aaron",
  }]});
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  res.render('users',{title: "用户界面",id:id ,navList:[{
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
