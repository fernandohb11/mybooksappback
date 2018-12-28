const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const addressSchema = new Schema({
  name: String,
  street: String,
  ext_num: Number,
  int_num: Number,
  state:String, 
  zip_code:Number,
  phone_number:Number
},{
  timestamps:{
    createdAt: true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Address', addressSchema);