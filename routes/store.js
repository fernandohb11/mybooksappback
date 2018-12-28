const express = require('express');
const Store = require('../models/Store');
// const user = require('../models/User')

const router = express.Router();

//C
router.post('/store', (req, res, next)=> {
  Store.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    pictures: req.body.pictures,
    category: req.body.category,
    inventory: req.body.inventory
  })
    // .then(response => {
    //   Author.findByIdAndUpdate(req.body.user, 
    //     {$push: {books: response._id}})
    //     .then(res.json(response))
    //     .catch(e=>res.json(e))
    // })
    .catch(e => res.json(e))
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