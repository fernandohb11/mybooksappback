const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
  name:String,
  description:String,
  status:Boolean
},{
  timestamps:{
    createdAt: true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Category', categorySchema);