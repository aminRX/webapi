'use strict';

module.exports = function (db) {

  function all() {
    return db.query('select * from users', function (err, rows, fields) {
      if (err) throw err;
      console.log('The solution is: ', rows[0].solution);
    });
  }

  return {
    all: all
  };
};
