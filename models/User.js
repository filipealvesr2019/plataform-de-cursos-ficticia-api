// backend/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, unique: false },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
