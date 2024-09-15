// backend/models/match.js
const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  mentorId: mongoose.Schema.Types.ObjectId,
  expertise: String
});

module.exports = mongoose.model('/Match', matchSchema);
