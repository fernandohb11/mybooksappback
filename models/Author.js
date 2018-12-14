const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Book = require('../models/Book');

const authorSchema = new Schema({
  image: String,
  name: String,
  nationallity: String,
  books: [
    {type: Schema.Types.ObjectId,
    ref: 'Book'}
  ]
},{
  timestamps:{
    createdAt: true,
    updatedAt: true
  }
});

module.exports = mongoose.model('Author', authorSchema)