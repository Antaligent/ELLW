const mongoose = require('mongoose');

async function connect() {
  return mongoose.connect('mongodb://127.0.0.1:27017/exemple');
}

module.exports.connect = connect;