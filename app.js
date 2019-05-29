var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// View engine setup:
// Identify the path to the view files.
app.set('views', path.join(__dirname, 'views'));
// And identify the engine that processes those files.
app.set('view engine', 'twig');

// The logger tool has a bunch of predefined settings. This is for stdout formatting.
app.use(logger('dev'));
// Creates req.body with any incoming json payload.
app.use(express.json());
// If no json on the request, this one creates req.body from a www-form-urlencoded payload.
// The false value for extended means that "rich objects/arrays" are not supported.
app.use(express.urlencoded({ extended: false }));
// Creates req.cookies with submitted cookies.
app.use(cookieParser());
// Routes requests to the filesystem for the subdirs of the supplied folder path.
// Obviously we can't have routes that match the paths inside public.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler.
// Is this executed here only in cases where no routes match?
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler that actually renders the error info.
// These funcs have four args. I'm guessing express counts those
// when it internally arranges middleware.
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
