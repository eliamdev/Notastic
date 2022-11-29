const mongoose = require('mongoose');
const { Schema } = mongoose;

const Note = new Schema({
  title: String,
  description: String,
  date: String
});

module.exports = mongoose.model('Note', Note);