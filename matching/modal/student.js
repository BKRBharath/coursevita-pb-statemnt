// backend/models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  goals: String,
  preferredAreas: String,
  availability: String
});

module.exports = mongoose.model('/Student', studentSchema);
