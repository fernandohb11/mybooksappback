const express = require('express');
const user = require('../models/User');
const router = express.Router();
const store = require('../models/Store')

//C
//(Create new user)
router.post('/user', (req, res, next) => {
  user.create({
    image: req.body.image,
    name: req.body.name,
    phone: req.body.phone,
    address:[],
    store: req.body.store 
  })
  .then(response=>{
    res.json(response)
  })
  .catch(e=>res.json(e))
})

//R
//(Get all user )
router.get('/user', (req, res, next) =>{
  user.find()
    .then(response => {
      res.json(response);
    })
    .catch(e=> res.json(e))
})
//(Get single user by id)
router.get('/user/:id', (req, res, next) =>{
 user.findById(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(e=> res.json(e))
})
//U
//(Update name or nat)*

//D
//(Delete by id)
router.delete('/user/:id', (req, res, next) =>{
  user.findByIdAndRemove(req.params.id)
    .then(response =>{
      res.json({message: "El usuario se eliminó correctamente."})
    })
    .catch(e => res.json(e))
})

module.exports = router;