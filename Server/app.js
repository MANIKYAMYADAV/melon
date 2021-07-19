var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require("http");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose')

//connect to mongodb using mongoose....
mongoose.connect('mongodb+srv://manikyam10:Mani1432@cluster0.xtdvu.mongodb.net/user', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => { console.log("mongodb connected"); })

var app = express();



app.use(function (req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  if (req.method == 'OPTIONS') {
    req.header('Access-Control-Allow-Methods', 'PUT,POST, PATCH ,DELETE , GET ');
    return res.status(200).json({});
  }
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/employee', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = http.createServer(app);
server.listen(4000, () => {
  console.log('listening on *:4000');
});

module.exports = app;
