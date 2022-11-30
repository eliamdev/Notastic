const mongoose = require('mongoose');
const { Schema } = mongoose;

const Note = new Schema({
  tittle: String,
  description: String,
  date: String
},{
  versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Note', Note);