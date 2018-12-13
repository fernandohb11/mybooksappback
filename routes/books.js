const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

//C
router.post('/books', (req, res, next)=> {
  Book.create({
    name: req.body.name,
    year: req.body.year,
    description: req.body.description,
    author: req.body.author
  })
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e))
})

//R
//Get all books
router.get('/books', (req, res, next) => {
  Book.find()
   .then(response => {
     res.json(response);
   })
   .catch(e=>res.json(e))
})

//get a single book
router.get('/books/:id', (req, res, next) => {
  Book.findById(req.params.id)
   .then(response => {
     res.json(response);
   })
   .catch(e=>res.json(e))
})

//U

//D

router.delete('/books/:id', (req, res, next) => {
  Book.findByIdAndRemove(req.params.id)
    .then(response => {
      res.json({message: "Ya valió v este libro"})
    })
    .catch(e => res.json(e))
})

module.exports = router;