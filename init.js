/**
 * Created by DaVer on 16/8/22.
 */
var express = require('express');
var test = require('./server/index.js');
var path = require('path');
var serveStatic = require('serve-static');

app = express();


app.set('views', './public/view');
app.set('view engine', 'jade');

app.use(serveStatic('build'));

app.use('/index', test);

module.exports = app;
