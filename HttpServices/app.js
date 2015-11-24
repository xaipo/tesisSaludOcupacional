var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var login = require('./routes/login');
//var users = require('./routes/users');

var app = express();
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));//cambiar false
app.use(express.static(path.join(__dirname, 'public')));

/*app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
});*/
app.use('/login', login);
//app.use('/users', users);


app.listen( 3000, function () { console.log(' Server listening on', 3000) })

module.exports = app;
