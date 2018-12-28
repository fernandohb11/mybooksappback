const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const inventorySchema = new Schema({
  name:String,
  tipo:{type:String, 
    enum: ['Unico', 'Inventario', 'Opciones']},
    tallas:[]
},{
  timestamps:{
    createdAt: true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Inventory', inventorySchema);