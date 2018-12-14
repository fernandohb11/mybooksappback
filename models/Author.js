const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plm = require('passport-local-mongoose')

// const Book = require('../models/Book');

const authorSchema = new Schema({
  image: String,
  name: String,
  email:{
    type:String,
    unique:true,
  },
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

authorSchema.plugin(plm,{usernameField:'email'})

module.exports = mongoose.model('Author', authorSchema)