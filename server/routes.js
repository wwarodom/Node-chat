'use strict'

var Chat = require('./models/chat');

module.exports = function(app) {
    app.get('/api/messages', function(req, res) {
        Chat.find()
            .sort('field +date')
            .exec(function(err, messages) {
                res.json(messages);
            });
    });

    app.post('/api/send', function(req, res) {
        var data = {
            name: req.body.name,
            message: req.body.message,
            date: new Date()
        };
        Chat.create(data);

        return res.send('finished');
    });

    //use angular for view
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};
