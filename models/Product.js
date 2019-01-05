const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
  tituloItem:String,
  descriptionItem:String,
  precioItem:String,
  categoriasItem:String,
  piezasItem:String,
  envioItem:String,
  categoriasItem:String
  
},{
  timestamps:{
    createdAt: true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Product', productSchema);