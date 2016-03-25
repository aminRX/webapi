'use strict';

const db = {};
const env = process.env.NODE_ENV || 'development';
const config = require('../../db/database.json')[env];
const models = require('require-dir')();
const mongoose = require('mongoose');
const changeCase = require('change-case');

mongoose.connect('mongodb://localhost:27017/');

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'Connection error'));
connection.once('open', function () {
  console.log('Connected to mongodb.');
});

Object.keys(models).forEach(function(modelName) {
  db[changeCase.pascalCase(modelName)] = require(`./${modelName}`);
});

db.mongoose = mongoose;

module.exports = db;
