const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Author = require('../models/Author');

const bookSchema = new Schema({
  image: String,
  name: String,
  year: Number,
  description: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
},{
  timestamps:{
    createdAt: true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Book', bookSchema);