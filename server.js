'use strict';

var express = require('express');
var mongoose = require('mongoose');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

mongoose.connect('mongodb://localhost:27017/simpleChat');

app.configure(function() {
    //set the static files location
    app.use(express.static(__dirname + '/public'));

    //log every request to console
    app.use(express.logger('dev'));

    //use for get post data (json format)
    app.use(express.json());

    //use for get post data (urlencode format)
    app.use(express.urlencoded());

    //use for use cookies in request
    app.use(express.cookieParser('secret'));
});

io.on('connection', function (socket) {
    socket.on('messages', function(messages) {
        io.emit('messages', messages);
        console.log(messages);
    });
    console.log('user connect');
});

require('./server/routes.js')(app, io);

http.listen(3000);

console.log('Server start on port 3000');
