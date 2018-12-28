const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  pictures: [],
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }],
  inventory: [{
    type: Schema.Types.ObjectId,
    ref: 'Inventory'
  }]

},{
  timestamps:{
    createdAt: true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Store', itemSchema);