// backend/models/mentor.js
const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: String,
  email: String,
  expertise: String,
  availability: String,
  teachingStyle: String
});

module.exports = mongoose.model('/Mentor', mentorSchema);
