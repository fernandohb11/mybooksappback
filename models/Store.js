const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const storeSchema = new Schema({
  tituloShop: String,
  descriptionShop: String,
  phoneShop: Number,
  emailShop:String,
  product:[{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
  
},{
  timestamps:{
    createdAt: true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Store', storeSchema);