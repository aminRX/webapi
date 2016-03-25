var logger = require('winston');
var express = require('express');
var app = express();
var serverDelta = require('http').Server(app);
var serverEnte = require('http').Server(app);
var serverUrna = require('http').Server(app);

var start = function (cb) {
  'use strict';
  serverDelta.listen(6001);
  logger.info('[SOCKET DELTA] Listening on port ' + 6001);
  serverEnte.listen(6002);
  logger.info('[SOCKET ENTE] Listening on port ' + 6002);
  serverUrna.listen(6003);
  logger.info('[SOCKET URNA] Listening on port ' + 6003);

  var ioEnte = require('socket.io')(serverEnte);
  require('../../app/events/ente.js')(ioEnte);

  if (cb) {
    return cb();
  }

};
module.exports = start;
