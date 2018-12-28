const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const paymentSchema = new Schema({
  card_number: Number,
  name: String,
  cvv: Number,
},{
  timestamps:{
    createdAt: true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Payment', paymentSchema);