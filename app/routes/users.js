var usersController = require('../controllers/usersController');

module.exports = function(router) {
  'use strict';
  router.route('/')
    .get(usersController.index)
    .post(usersController.new);
  router.route('/:userid')
    .get(usersController.show);
};
