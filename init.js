/**
 * Created by DaVer on 16/8/22.
 */
var express = require('express');
var test = require('./server/index.js');
var path = require('path');
app = express();


app.set('views', './public/view');
app.set('view engine', 'jade');


app.use('/index', test);

module.exports = app;