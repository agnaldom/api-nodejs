const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.0.165/noderest', { });
mongoose.Promise = global.Promise;

module.exports = mongoose;
