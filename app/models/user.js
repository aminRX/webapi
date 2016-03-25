'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  account: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
