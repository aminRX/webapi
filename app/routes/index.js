var changeCase = require('change-case');
var express = require('express');
var routes = require('require-dir')();
var middleware = require('../middleware/auth');

module.exports = function(app) {
  'use strict';

  // Initialize all routes
  // app.post('/signin', middleware.authenticate);
  // app.post('/signup', function  () {
  //
  // });
  Object.keys(routes).forEach(function(routeName) {
    var router = express.Router();
    // You can add some middleware here
    // router.use(middleware.validateToken);
    // Initialize the route to add its functionality to router
    require('./' + routeName)(router);

    // Add router to the sppeficied route name in the app
    app.use('/' + changeCase.paramCase(routeName), router);
  });
};
