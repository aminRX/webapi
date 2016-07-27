'use strict';

const logger = require('winston');

var start = function(cb) {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'drchapp'
  });

  connection.connect();

  if (cb) {
    return cb(null, connection);
  }

};

module.exports = start;
