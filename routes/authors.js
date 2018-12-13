const express = require('express');
const Author = require('../models/Author');

const router = express.Router();

//C
//(Create new author)
router.post('/authors', (req, res, next) => {
  Author.create({
    name: req.body.name,
    nationallity: req.body.nationallity,
    books: []
  })
  .then(response=>{
    res.json(response)
  })
  .catch(e=>res.json(e))
})

//R
//(Get all authors )
router.get('/authors', (req, res, next) =>{
  Author.find()
    .then(response => {
      res.json(response);
    })
    .catch(e=> res.json(e))
})
//(Get single author by id)
router.get('/authors/:id', (req, res, next) =>{
  Author.findById(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(e=> res.json(e))
})
//U
//(Update name or nat)*

//D
//(Delete by id)
router.delete('/authors/:id', (req, res, next) =>{
  Author.findByIdAndRemove(req.params.id)
    .then(response =>{
      res.json({message: "Ya valio v este autor."})
    })
    .catch(e => res.json(e))
})

module.exports = router;