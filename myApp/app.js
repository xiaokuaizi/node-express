var express = require('express');
var path = require('path');
var hbs = require('express-hbs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var viewsPath = path.join(__dirname, './views');
var partialsPath = path.join(__dirname, './partials');
var layoutsPath = path.join(__dirname, './layouts');

//注册模板引擎
app.engine('hbs', hbs.express3({  
  viewsDir    : viewsPath,  //模板文件的路径
  layoutsDir  : layoutsPath,
  partialsDir  : partialsPath
}));

app.set('view engine', 'hbs');  //使用什么模版引擎
app.set('views', viewsPath);  //模版文件放在哪里

app.use('/', index);
app.use('/users', users);
app.use('/about', about);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title:"错误页"});
});

module.exports = app;
