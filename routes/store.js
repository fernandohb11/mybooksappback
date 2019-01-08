const express = require('express');
const Store = require('../models/Store');
const User = require('../models/User')

const router = express.Router();

//C



router.post('/store', (req, res, next)=> {
  Store.create(req.body)
  .then(store=>{
    User.findByIdAndUpdate(req.body.user,{$push:{stores: store._id}}, { 'new': true})
    .then(user=>{
      res.status(201).json(store).json(user)
    })
    .catch(e=>res.status(500).json(e))
  })
  .catch(e=>res.status(500).json(e))
})

//R
//Get all store
router.get('/store', (req, res, next) => {
  Store.find()
   .then(response => {
     res.json(response);
   })
   .catch(e=>res.json(e))
})

//Get all userStores
router.get('/stores/:id', (req, res, next) => {
  User.findById(req.params.id).populate('stores')
   .then(user => {
     res.status(200).json(user);
   })
   .catch(e=>res.json(e))
})

//get a single store
router.get('/store/:id', (req, res, next) => {
  Store.findById(req.params.id)
   .then(response => {
     res.json(response);
   })
   .catch(e=>res.json(e))
})

//U
router.put('/store/:id', (req, res, next) => {
 Store.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(response => {
      res.json(response, {message: "Store updated successfully"})
    })
    .catch(e => res.json(e));
})

//D

router.delete('/books/:id', (req, res, next) => {
  Store.findByIdAndRemove(req.params.id)
    .then(response => {
      res.json({message: "Store deleted"})
    })
    .catch(e => res.json(e))
})

module.exports = router;