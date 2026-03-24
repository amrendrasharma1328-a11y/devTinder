
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] }
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;