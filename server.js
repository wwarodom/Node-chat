'use strict';

var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost:27017/simpleChat');

app.configure(function() {
    //set the static files location
    app.use(express.static(__dirname + '/public'));

    //log every request to console
    app.use(express.logger('dev'));

    //use for get post data (json format)
    app.use(express.json());
});

require('./server/routes.js')(app);

app.listen(3000);
console.log('Server start on port 3000');
