const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plm = require('passport-local-mongoose')


const userSchema = new Schema({
  photoURL: String,
  userName: String,
  nombreUsuario:String,
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
userSchema.plugin(plm,{usernameField:'email'})
module.exports = mongoose.model('User', userSchema);