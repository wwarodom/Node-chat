var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = new Schema({
    name: String,
    message: String,
    date: Date
});

module.exports = mongoose.model('Chat', ChatSchema);

