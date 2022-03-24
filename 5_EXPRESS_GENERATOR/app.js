//  Requerimos la librería hettp-errors que nos ayudará a controlar diferentes 
// tipos de errores.
var createError = require('http-errors'); 

// Requerimos la funcionalidad de la librería express y la guardamos en la
// constanta o variable express.
var express = require('express');

// Requerimos la librería path que nos ayuda a conseguir un path válido para
//rutas.
var path = require('path');

// Requerios la librería cookie-parser que nos ayuda a controlar las cookies.
var cookieParser = require('cookie-parser'); 

// Requerimos la librería morgan que nos sirve para registrar las solicitudes
// (peticiones) y nos informa de el tipo de solicitud que hacemos (get, post, 
//put, dekete).
var logger = require('morgan');

//Requerimos la funcionalidad de los diferentes arhivos de rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Iniciamos express
var app = express();

// Informamos a Node que tenemos una carpeta de vistas de tipo ejs
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));

// Nos permite capturar la información de los formularios
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// Ruta estática a la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Establecemos la ruta base nuestros arhivos de rutas
//localhost:3000
app.use('/', indexRouter);
//localhost:3000/users
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

module.exports = app;
