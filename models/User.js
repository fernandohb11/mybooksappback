const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  image: String,
  name: String,
  year: Number,
  phone: String,
  address: [{
    type: Schema.Types.ObjectId,
    ref: 'Address'
  }],
  payment_method: [{
    type: Schema.Types.ObjectId,
    ref: 'Payment'
  }],
  stores: [{
    type: Schema.Types.ObjectId,
    ref: 'Store'
  }]
}
,{
  timestamps:{
    createdAt: true,
    updatedAt:true
  }
})

module.exports = mongoose.model('User', userSchema);