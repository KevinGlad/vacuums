let createError = require('http-errors')
let express = require('express')
const cors = require("cors")
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')

let indexRouter = require('./routes/index')
let vacuumRouter = require("./routes/vacuum")

let app = express();

// intial config vacuums are not clogged
let vacuumStatuses={
  A:{
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false
  },
  B:{
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false
  }
}

app.locals.vacuumStatus = vacuumStatuses

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
//app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'spa/build')))

app.use("/", indexRouter)
app.use("/vacuum",vacuumRouter)

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
