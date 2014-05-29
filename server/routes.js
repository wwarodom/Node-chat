'use strict'

module.exports = function(app, io) {

    //ajax call
    app.post('/api/setname', function(req, res) {
        var minute = 180*60*1000;
        res.cookie('name', req.body.name, {maxAge: minute});
        res.redirect('/chat');
    });

    //use angular for view
    app.get('/', function(req, res) {
        res.sendfile('./public/index.html');
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/chat.html');
    });
};
