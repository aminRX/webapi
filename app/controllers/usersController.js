'use stric';

var models = require('../models');

exports.index = function(req, res) {
  models.User.all()
};

exports.show = function(req, res, next) {
  res.json({});
};

exports.new = function(req, res, next) {
  res.json({});
};
