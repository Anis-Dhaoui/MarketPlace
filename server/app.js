var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var fileStore = require('session-file-store')(session);
var passport = require('passport');
require("dotenv").config();
var helmet = require('helmet');
const cors = require('cors');
// cronjob to remove users who has been registred since 3 days but they haven't verified their email yet
var cronjob = require('./utils/cronjobUsers');
var User = require('./models/userSchema');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/productRouter');
var commentRouter = require('./routes/commentRouter');
var uploadAvatarRouter = require('./routes/uploadAvatarRouter');
var uploadProdImgsRouter = require('./routes/uploadProdImgsRouter');
var wishListRouter = require('./routes/wishListRouter');

// Connecting with Mongodb Server
mongoose.Promise = global.Promise;
const url = process.env.mongoUrl;
const connect = mongoose.connect(process.env.MONGODB_URI || url);
connect.then((db) => {
  console.log("Connected to Mongodb Server Correctly... " + db.connections[0]._connectionString);
}, (err) => console.log("Cannot connect to Mongodb server... " + err));

var app = express();


// $$$$$$$$$$$$$$$$$$ Redirect all incomming http request to https $$$$$$$$$$$$$$$$$$
// app.all('*', (req, res, next) => {
//   if(req.secure){
//     return next();
//   }else{
//     res.redirect(307, 'https://' + req.hostname + ':' + app.get('secPort') + req.url);
//   }
// });
// $$$$$$$$$$$$$$$$$$ END $$$$$$$$$$$$$$$$$$


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false, // disable Content Security Policy
  crossOriginResourcePolicy: { policy: 'cross-origin' }, // set Cross-Origin Resource Policy to 'cross-origin'
  dnsPrefetchControl: { allow: true }, // enable DNS prefetching
  frameguard: { action: 'same-origin' }, // set X-Frame-Options header to 'SAMEORIGIN'
  hidePoweredBy: { setTo: 'PHP 7.4.3' }, // set X-Powered-By header to 'PHP 7.4.3'
  hsts: { maxAge: 31536000, includeSubDomains: true }, // enable HTTP Strict Transport Security
  ieNoOpen: true, // set X-Download-Options header to 'noopen'
  noSniff: true, // set X-Content-Type-Options header to 'nosniff'
  referrerPolicy: { policy: 'same-origin' }, // set Referrer-Policy header to 'same-origin'
  xssFilter: { setOnOldIE: true } // enable X-XSS-Protection header and set it to '1; mode=block'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);
app.use('/products', productRouter);
app.use('/comments', commentRouter)
app.use('/mywishlist', wishListRouter);
app.use('/uploadavatar', uploadAvatarRouter);
app.use('/uploadprodimgs', uploadProdImgsRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// User.find({}, (err, users) =>{
//   const getIds = users.map(item =>{
//     if(!item.isVerified){
//       item.isVerified = true;
//       item.save()
//     }
//   })
// })

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
