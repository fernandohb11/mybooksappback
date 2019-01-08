const express = require('express');
const Product = require('../models/Product');
const Store = require('../models/Store')

const router = express.Router();

//C
router.post('/product', (req, res, next) => {
  console.log(req.body)
  const store = req.body.store
  Product.create(req.body)
    .then(product => {
     console.log(store)
      Store.findByIdAndUpdate(store, { $push: { product: product._id } }, { 'new': true })
        .then(store => {
          console.log(store)
          res.status(201).json(store)
      }).catch(e=>res.status(500).json(e))
  })
  .catch(e=>res.status(500).json(e))
})

//R
//Get all products
router.get('/product', (req, res, next) => {
  Store.find()
   .then(response => {
     res.json(response);
   })
   .catch(e=>res.json(e))
})

//get a single product
router.get('/product/:id', (req, res, next) => {
  Store.findById(req.params.id)
   .then(response => {
     res.json(response);
   })
   .catch(e=>res.json(e))
})

//U
router.put('/product/:id', (req, res, next) => {
 Store.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(response => {
      res.json(response, {message: "Product updated successfully"})
    })
    .catch(e => res.json(e));
})

//D

router.delete('/product/:id', (req, res, next) => {
  Store.findByIdAndRemove(req.params.id)
    .then(response => {
      res.json({message: "product deleted"})
    })
    .catch(e => res.json(e))
})

module.exports = router;