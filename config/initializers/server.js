// config/initializers/server.js

var express = require('express');
var path = require('path');
// Local dependecies
var config = require('nconf');

// create the express app
// configure middlewares
var bodyParser = require('body-parser');
var morgan = require('morgan');
var logger = require('winston');
var app = express();
var models = require('../../app/models');

var server = require('http').Server(app);

var start =  function(cb) {
  'use strict';
  app.use(morgan('common'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json({type: '*/*'}));
  logger.info('[SERVER] Initializing routes');
  require('../../app/routes/index')(app);
  app.use(express.static(__dirname + '/assets'));

  // Error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: (app.get('env') === 'development' ? err : {})
    });
    next(err);
  });

  if (process.env.NODE_ENV === 'test') {
    process.env.PORT = 3001;
  }
  var port = process.env.PORT || config.get('NODE_PORT');
  server.listen(port);
  logger.info('[SERVER] Listening on port ' + port);

  if (cb) {
    return cb();
  }
};

module.exports = start;
