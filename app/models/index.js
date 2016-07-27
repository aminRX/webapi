'use strict';

const env = process.env.NODE_ENV || 'development';
const config = require('../../db/database.json')[env];
const models = require('require-dir')();
const changeCase = require('change-case');
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'drchapp'
});

let db = {};

Object.keys(models).forEach(function(modelName) {
  db[changeCase.pascalCase(modelName)] = require(`./${modelName}`)(connection);
});

db.connection = connection;

module.exports = db;
