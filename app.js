/**
 * Module dependencies
*/
var express = require('express')
, app = express()
, http = require('http')
, path = require('path')
, bodyParser = require('body-parser')
, querystring = require('querystring')
, fs = require('fs')
, url = require('url')
, cookieParser = require('cookie-parser')
, methodOverride = require('method-override')
, session = require('express-session')
, favicon = require('serve-favicon')
, logger = require('morgan');

app.set('views', __dirname + '/views');
app.set('view engine', 'html'); // set up html for templating
app.engine('.html', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./controllers/routes')(app));
app.use('/resource', require('./controllers/resource')(app));

module.exports = app;
