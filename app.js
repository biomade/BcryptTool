var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
<<<<<<< HEAD

//added a global variable so we don't have to worry about getting the correct paths in other files
global.appRoot = path.resolve(__dirname);

// var index = require('./routes/index');
// //route for the bcrypt tool and anything below it
// var bcrypt = require('./routes/bcrypt');

=======
//creates a global object to be used elsewhere
global.appRoot = path.resolve(__dirname);
//variables for the routes
var index = require('./routes/index');
//route for the bcrypt tool and anything below it
var bcrypt = require('./routes/bcrypt');

//LOCAL VARIABLES
>>>>>>> b8b9414097a07746d6787c44597b7c16e14aea65
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// //this is to take the url to the other pages and pass to the variables
// app.use('/bcrypt/', bcrypt);

//MVC ROUTES, anything in the routes folder
require(path.join(global.appRoot, 'routes/router.js'))(app); //this passes the app into the function on the other end


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
  res.render('error');
});

module.exports = app;
