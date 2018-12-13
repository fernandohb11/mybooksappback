const router = require('express').Router()
const Author = require('../models/Author')

//Signup
router.post('/signup', (req, res, next)=>{
  Author.register(req.body, req.body.password)
    .then(user=>{
      res.status(201).json(user)
    }).catch(e=>{
      res.status(500).json(e)
    })
})

//login

//logout

//profile

module.exports = router